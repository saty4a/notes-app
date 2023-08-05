import mongoose from "mongoose";
import dbData from "../config.js";

mongoose.connect(`mongodb+srv://${dbData.username}:${dbData.password}@cluster0.x5yvfr6.mongodb.net/${dbData.dbName}`,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export const database = mongoose.connection;

database.on("error", (error) => {
    console.log("Error in MongoDB connection: " + error);
})

database.once("open",() => {
    console.log("connected successfully");
})