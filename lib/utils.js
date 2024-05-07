import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { connection, mongoose } from "mongoose";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const connectToDatabase = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error("Error connecting to database");
  }
};
