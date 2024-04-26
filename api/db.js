import mongoose from "mongoose";
import { config } from "dotenv";
import process from "process";

config();

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.jmtgodg.mongodb.net/`);

        console.log("Database connected");
    } catch (err) {
        console.log(err);
    }
}

export default main;