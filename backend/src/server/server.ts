import { Request, Response } from "express";

import express from "express";

const app = express();

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "Ok"})
})



export default app;