import express from "express";
import { config } from "dotenv";
import main from "./db.js";
import cors from "cors";
import pictureRouter from "./routes/picture.js";

const app = express();
config();
main();

app.use(cors());

const port = 8080;

app.use("/pictures", pictureRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});