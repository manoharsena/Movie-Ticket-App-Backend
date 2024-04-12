import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./Routers/user.router.js";
import connectDB from "./Database/dbConfig.js";
import adminRouter from "./Routers/admin.router.js";
import movieRouter from "./Routers/movie.router.js";
import bookingRouter from "./Routers/booking.router.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

// middlewares
app.use(cors())
app.use(express.json())
app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/movie", movieRouter)
app.use("/booking", bookingRouter)

connectDB();

app.listen(port, () => {
    console.log(`App listening to port - ${port}`)
})