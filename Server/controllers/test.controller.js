import jwt from "jsonwebtoken";

const shouldBeLoggedIn = async (req, res) => {
  //   const token = req.cookies.token;
  //   if (!token) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }
  //   jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
  //     if (err) {
  //       return res.status(403).json({ message: "Token is not valid" });
  //     }
  //   });
  res.status(200).json({ message: "You are authenticated" });
};

const shouldBeAdmin = async (req, res) => {};

export { shouldBeLoggedIn, shouldBeAdmin };
