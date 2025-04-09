import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const inserIntoDB = async (data: Post): Promise<Post> => {
    const result = await prisma.post.create({
        data,

        include: {
            author: true,
            category: true
        }

    });
    return result;
};

const getAllPost = async () => {
    const result = await prisma.post.findMany({
        include: {
            author: true,
            category: true
        }
    });
    return result;
};

const getSinglePost = async (id: number): Promise<Post | null> => {
    const result = await prisma.post.findUnique({
        where: {
            id
        },
        include: {
            author: true,
            category: true
        }
    });

    return result;
}


const updatePost = async (id: number, data: Post): Promise<Post> => {

    const result = await prisma.post.update({
        where: {
            id
        },
        data
    });

    return result
};

const deletePost = async(id: number): Promise<Post> => {
    const result = await prisma.post.delete({
        where: {
            id
        }
    });

    return result
}


export const postService = {
    inserIntoDB,
    getAllPost,
    getSinglePost,
    updatePost,
    deletePost
}
