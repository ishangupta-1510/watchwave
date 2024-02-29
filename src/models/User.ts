import mongoose from "mongoose";

interface User {
  id: string;
  username: string;
  photo: string;
  playlist: { body: string }[];
  liked: Number;
  comments: { body: string }[];
  rating?: Number;
  watchedtill: Number;
  watched: boolean;
  admin: boolean;
}

const userSchema = new mongoose.Schema<User>({
  username: String,
  photo: String,
  playlist: { type: [{ body: String }], default: [] },
  liked: { Number, default: 0 },
  comments: { type: [{ body: String }], default: [] },
  watchedtill: { Number, default: 0 },
  watched: { Boolean, default: false },
  admin: { Boolean, default: false },
});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
