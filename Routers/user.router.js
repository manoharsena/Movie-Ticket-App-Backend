import express from "express";
import { Login, SignUp, deleteUser, getAllUsers, getBookingsOfUser, getUserById, updateUser } from "../Controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", SignUp);
userRouter.post("/login", Login);
userRouter.get("/AllUsers", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/bookings/:id", getBookingsOfUser);

export default userRouter;