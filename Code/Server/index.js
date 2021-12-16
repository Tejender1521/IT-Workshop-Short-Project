import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
 
app.use("/posts", postRoutes);





const CONNECTION_URL =
// Demo for mongoDB Atlas connection link just replace it with your own
  "mongodb+srv://userName:<password>@cluster0.edtxs.mongodb.net/Memories?retryWrites=true&w=majority";




const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `Server Running on Port: http://localhost:${PORT}...\nDatabase connected sucessfully.....`
      )
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
