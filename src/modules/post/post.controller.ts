import { Request, Response } from "express";

import { postService } from "./post.service";

const inserIntoDB = async(req:Request, res:Response) => {
    try {
        const result = await postService.inserIntoDB(req.body);
        res.status(200).json({
            message:"User created successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error: (error as Error).message
        })
    }
};

const getAllPost = async(req:Request, res:Response)=>{
    try {
        const result = await postService.getAllPost();
        res.status(200).json({
            message:"User created successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error: (error as Error).message
        })
    }
}

export const postController = {
    inserIntoDB,
    getAllPost
     
}