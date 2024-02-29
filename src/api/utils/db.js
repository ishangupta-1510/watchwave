import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = true;
    console.log("connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connect;
