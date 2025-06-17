import mongoose from "mongoose";
const { connection } = mongoose;

export const ConnectDB = async () => {
  try {
    console.log("Connecting to:", process.env.MONGO_URI); // Debug
    mongoose.connection.on("connected", () =>
      console.log(
        "DataBase Connected",
        "\n",
        "HostName:",
        connection.host,
        "\n",
        "Database Name:",
        connection.name
      )
    );

    await mongoose.connect(`${process.env.MONGO_URI}`);
  } catch (err) {
    console.error("Error connecting to Database:", err.message);
  }
};
