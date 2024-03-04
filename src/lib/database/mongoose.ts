import mongoose, { Mongoose } from "mongoose"; // importing the Mongoose type

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// retrieving the Mongoose connection info from global scope if not then we are initializing one
let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  // checking if we have a cached connection else we make one by using mongoose
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MongoDb Url missing");

  //   initializing the promise to connect to the database
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "pixelyze",
      bufferCommands: false,
    });

  // waiting for the connection promise to be resolved
  cached.conn = await cached.promise;

  return cached.conn;
};
