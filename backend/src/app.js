const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const feedRouter = require("./routers/feed");

const app = express();

app.use(express.json());
app.use(cors());
app.use(feedRouter);

module.exports = app;
