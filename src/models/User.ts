import mongoose from "mongoose";

interface User {
  _id: string;
  username: string;
  photo: string;
  playlist: { body: string }[];
  liked: { body: string }[];
  comments: { body: string }[];
  watchedtill: Number;
  watched: boolean;
  admin: boolean;
}

const userSchema = new mongoose.Schema<User>({
  username: String,
  photo: String,
  playlist: { type: [{ body: String }], default: [] },
  liked: { type: [{ body: String }], default: [] },
  comments: { type: [{ body: String }], default: [] },
  watchedtill: { Number, default: 0 },
  watched: { Boolean, default: false },
  admin: { Boolean, default: false },
});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
