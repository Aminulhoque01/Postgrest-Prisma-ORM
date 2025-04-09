import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post ("/create-user", UserController.inserIntoDB);
router.post("/update-profile", UserController.inserOrUpdateProfile);



export const userRoutes = router;