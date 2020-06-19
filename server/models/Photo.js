import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Photo = new Schema(
    {
        imgUrl: { type: String, required: true},
        imageName: {type: String, required: true}
    }
);

export default Photo;