import { Request, Response } from "express";
import { categoryService } from "./category.service";

const inserIntoDB = async (req:Request, res:Response)=>{
    try {
        const result = await categoryService.inserIntoDB(req.body);
        res.status(200).json({
            message:"Category created successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error: (error as Error).message
        })
    }
}

export const categoryController = {
    inserIntoDB
}