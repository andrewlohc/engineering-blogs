const express = require("express");
require("./db/mongoose");
const feedRouter = require("./routers/feed");

const app = express();

app.use(express.json());
app.use(feedRouter);

module.exports = app;
