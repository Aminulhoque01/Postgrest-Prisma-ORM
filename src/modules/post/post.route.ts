import express from "express";
import { postController } from "./post.controller";
const router = express.Router();
router.post("/create-post", postController.inserIntoDB);
router.get("/get-all-post", postController.getAllPost);
router.get("/get-single-post/:id", postController.getSinglePost);
router.patch("/update-post/:id", postController.updatePost);
router.delete("/delete-post/:id", postController.deletePost);

export const postRoutes = router;