import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to get user" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to get user" });
  }
};

export const updateUser = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...rest } = body;

  if (id !== tokenUserId) {
    return res
      .status(403)
      .json({ message: "You can only update your own profile" });
  }
  let updatePassword = null;

  try {
    if (password) {
      updatePassword = await bcrypt.hash(password, 10);
    }

    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        ...rest,
        ...(updatePassword && { password: updatePassword }),
        ...(avatar && { avatar }),
      },
    });
    const { password: userPassword, ...restUser } = user;
    res.json(restUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to update user" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  if (id !== tokenUserId) {
    return res
      .status(403)
      .json({ message: "You can only delete your own profile" });
  }
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};

export const notification = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const number = await prisma.chat.count({
      where: {
        userIDs: {
          hasSome: [tokenUserId],
        },
        NOT: {
          seenBy: {
            hasSome: [tokenUserId],
          },
        },
      },
    });
    res.status(200).json(number);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get notifications" });
  }
};

export const profilePosts = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const userPosts = await prisma.post.findMany({
      where: { userId: tokenUserId },
    });
    const saved = await prisma.savedPost.findMany({
      where: { userId: tokenUserId },
      include: {
        post: true,
      },
    });

    const savedPosts = saved.map((item) => item.post);
    res.status(200).json({ userPosts, savedPosts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get profile posts!" });
  }
};

export const savePost = async (req, res) => {
  const postId = req.body.postId;
  const tokenUserId = req.userId;

  try {
    const savedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId,
        },
      },
    });

    if (savedPost) {
      // Already saved — unsave it
      await prisma.savedPost.delete({
        where: {
          userId_postId: {
            userId: tokenUserId,
            postId,
          },
        },
      });
      res.status(200).json({ message: "Post removed from saved list" });
    } else {
      // Not saved — save it
      await prisma.savedPost.create({
        data: {
          userId: tokenUserId,
          postId,
        },
      });
      res.status(200).json({ message: "Post saved successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to save post!" });
  }
};
