import mongoose, { Schema, Document } from "mongoose";
import UserModel from "./User"; // Assuming you have User schema in User.ts
import movieModel  from "./Movie"; // Assuming you have Movie schema in Movie.ts

interface IComment extends Document {
  movie: String;
  user: String;
}

const CommentsSchema: Schema = new mongoose.Schema<IComment>({
  movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const CommentsModel = mongoose.model<IComment>("Comment", CommentsSchema);

export default CommentsModel;