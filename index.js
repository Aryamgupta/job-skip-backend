const express = require("express");
// for database connections
const dotenv = require("dotenv");
const mongoDbConnect = require("./Config/db");
dotenv.config();

const { notFound, errorHandler } = require("./Middleware/errorMiddleware");

mongoDbConnect();
// instance of express
const app = express();

const adminRoutes = require("./Routes/adminRoutes");
// to express the json data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use("/api/admin", adminRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000; // deciding port

const server = app.listen(
  PORT,
  console.log("server listening on port on " + PORT)
);
