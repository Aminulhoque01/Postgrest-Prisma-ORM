import express, { Application } from 'express';
import cors from 'cors';
import { userRoutes } from './modules/users/user.route';
import { categoryRoutes } from './modules/category/category.route';
import { postRoutes } from './modules/post/post.route';

const app:Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/post", postRoutes)

export default app;