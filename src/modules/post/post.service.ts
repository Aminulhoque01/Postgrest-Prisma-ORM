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

const getAllPost = async (options: any) => {
    const { sortBy, sortOrder, searchTerm, page, limit } = options;
    const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
    const take = parseInt(limit) || 10;
    const result = await prisma.post.findMany({
        skip,
        take,
        include: {
            author: true,
            category: true
        },
        orderBy: sortBy && sortOrder ? {
            [sortBy]: sortOrder
        } : { createdAt: 'desc' },
        where: {
            OR: [
                {
                    title: {
                        contains: searchTerm || undefined,
                        mode: 'insensitive'
                    }
                },

                {
                    author: {
                        name: {
                            contains: searchTerm || undefined,
                            mode: 'insensitive'
                        }
                    }
                }
            ]
        },
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

const deletePost = async (id: number): Promise<Post> => {
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
