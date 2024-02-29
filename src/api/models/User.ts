import mongoose from "mongoose";

interface User {
  username: string;
  photo: string;
  playlist: Array<{ body: string }>;
  liked: Number;
  comments: Array<{ body: string }>;
  rating: Number;
  watchedtill: Number;
  watched: boolean;
  admin: boolean;
}

const userSchema = new mongoose.Schema<User>({
  username: String,
  photo: String,
  playlist: [{ body: String }],
  liked: Number,
  comments: [{ body: String }],
  rating: Number,
  watchedtill: Number,
  watched: Boolean,
  admin: Boolean,
});
