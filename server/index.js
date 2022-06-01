import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { scraperController, browserInstance } from "./Scraping/index.js";

// import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://Ezio:deviljames@cluster0.gwgby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      // let browserInstance = browserObject.startBrowser();
      scraperController(browserInstance);
    })
  )
  .catch((error) => console.log(error.message));
