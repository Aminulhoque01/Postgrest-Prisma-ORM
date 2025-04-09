import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const inserIntoDB= async (data: User) => {
    const result  = await prisma.user.create({
        data
    });

    return result;
}

export const userService = {
    inserIntoDB
}