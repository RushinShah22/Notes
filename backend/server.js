const mongoose = require("mongoose");
const app = require("./app.js");


// connecting to mongoDB
const mongoURI = 'mongodb+srv://shahrushin32:P9Dl87vJsOjdcf7D@notes0.jbvpo29.mongodb.net/';

(async () => {
    try {
        const conn = await mongoose.connect(mongoURI);

        console.log(`MongoDB Connected`);

        // Starting App
        app.listen(4000, () => {
            console.log("Listening on port 4000.");
        })
      
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  })();