import Picture from "../models/Picture.js";
import fs from "fs";

export async function create(req, res) {
    try {
        console.log(req.file);
        const file = req.file;

        const picture = new Picture({
            name: file.originalname,
            src: file.path,
        });
        
        await picture.save();

        res.json({ picture, message: "Image salved successfully"});
    } catch (error) {
        console.error("Error saving image:", error);
        res.status(500).json({ message: "Error saving image.", error: error.message });
    }
}

export async function findAll(req, res) {
    try {
        const pictures = await Picture.find();

        res.json(pictures);
        console.log("All pictures: ", pictures)
    } catch (error) {
        console.error("Error when searching for images:", error);
        res.status(500).json({ message: "Error when searching for images", error: error.message });
    }
}

export async function remove(req, res) {
    try {
        const picture = await Picture.findById(req.params.id);

        if (!picture) {
            return res.status(404).json({ message: "Image not found"});
        }

        fs.unlinkSync(picture.src);
        
        await picture.deleteOne();

        res.json({ message: "Image removed successfully"});
    } catch (error) {
        console.error("Error deleting image:", error);
        res.status(500).json({ message: "Error deleting image.", error: error.message});
    }
}