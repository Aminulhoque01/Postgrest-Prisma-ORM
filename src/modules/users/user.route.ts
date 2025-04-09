import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post ("/create-user", UserController.inserIntoDB);
router.post("/update-profile", UserController.inserOrUpdateProfile);
router.get("/get-user", UserController.getUser);
router.get("/get-single/:id", UserController.getSingleUser);



export const userRoutes = router;