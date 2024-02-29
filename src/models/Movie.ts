import mongoose from "mongoose";

interface Movie {
  _id: string;
  movieid: string;
  likeCount: Number;
  comments: { body: string }[];
  trailer: string;
}

const movieSchema = new mongoose.Schema<Movie>({
  movieid: String,
  likeCount: { Number, default: 0 },
  comments: { type: [{ body: String }], default: [] },
  trailer: String,
});

const movieModel = mongoose.model<Movie>("Movie", movieSchema);

export default movieModel;
