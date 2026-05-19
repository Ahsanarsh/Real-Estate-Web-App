import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        city: undefined,
        type: undefined,
        property: undefined,
        bedroom: undefined,
        price: {
          gte: undefined,
          lte: undefined
        }
      }
    });
    console.log('Success:', posts.length);
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}
main();
