import { User } from "./models.js";

export const fetchUsers = async () => {
  try {
    connectoToDatabase();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching users");
  }
};
