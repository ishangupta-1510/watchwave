import mongoose from "mongoose";

interface Connection {
  isConnected: boolean;
}
const connection = {
  isConnected: false,
};

async function connect() {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://usa44052:ishan@cluster0.56ejkov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    connection.isConnected = true;
    console.log("connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connect;
