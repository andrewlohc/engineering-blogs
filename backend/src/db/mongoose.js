const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
