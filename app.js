require("dotenv").config();
const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");
app.get("/", (req, res) => {
  res.send("Hey, Dear...");
});

//middleware
app.use("/api/products", products_routes);

const Start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`${PORT}, Yes I am Connected...`);
    });
  } catch (error) {
    console.log(error);
  }
};
Start();

//DhjhygW1ZbTVePxN
//mongodb+srv://Sarfrajy21:DhjhygW1ZbTVePxN@cluster0.cjbaemx.mongodb.net/thapaApi?retryWrites=true&w=majority
