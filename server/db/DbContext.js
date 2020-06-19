import mongoose from "mongoose";
import PhotoSchema from "../models/Photo";
class DbContext{
    Photos = mongoose.model("Photo", PhotoSchema);

}

export const dbContext = new DbContext();