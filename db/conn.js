const mongoose = require("mongoose");

const DB =
  "mongodb+srv://kodame:Kodame2200@cluster0.rox7cru.mongodb.net/ImgUpload?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DATABASE connected"))
  .catch((err) => console.log("error" + err.message));
