import { Category, PrismaClient } from "@prisma/client";
import e from "express";

const prisma = new PrismaClient();

const inserIntoDB = async(data:Category):Promise<Category> => {
    const result = await prisma.category.create({
        data
    });
    return result;
}

export const categoryService = {
    inserIntoDB
}