import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("Db connected......");
    console.log(connection);
    console.log("Connection host: ", connection.host)
    
  } catch (error) {
    console.log("Failed to connect with Database......");
    console.log(error);
  }
};
