import express from "express";
import * as PictureController from "../controllers/pictureController.js";
import { upload } from "../config/multer.js";

const pictureRouter = express.Router();

pictureRouter.post("/", upload.single("image"), PictureController.create);
pictureRouter.get("/", PictureController.findAll);
pictureRouter.delete("/:id", PictureController.remove);

export default pictureRouter;