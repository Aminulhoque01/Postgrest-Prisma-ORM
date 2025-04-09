import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post ("/create-user", UserController.inserIntoDB);
 



export const userRoutes = router;