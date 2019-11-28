const mongoose = require("mongoose")

const mongodbUri = "mongodb://localhost:27017/security-scan"

const db = mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected successfully..."))
  .catch(error => console.log("Database Connection Error................", error))

module.exports = db
