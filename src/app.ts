import express, { json } from "express"
import { userRouter } from "./routes/routerUser"

const app = express();
app.use(json());


app.use("/", userRouter);
app.use("*", (req, res) =>
    res.status(404).json({ error: "Resource not found.." }))

export default app;