import prisma from "../config/database";

async function create(userId: number, token: string) {
  return prisma.session.create({
    data: {
      token,
      userId,
    },
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;
