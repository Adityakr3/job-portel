import mongoose from "mongoose";
export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "job portal database",
    })
    .then(() => {
      console.log(`connected to database`);
    })
    .catch((err) => {
      console.log(`something went wrong in database connetion ${err}`);
    });
};
