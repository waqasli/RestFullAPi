const express = require("express");
const app = express();

const errorMiddleware = require("./backend/middleware/error");
app.use(express.json());

//Route import
const product = require("./backend/routes/productRoute");
app.use("/api/v1", product);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
