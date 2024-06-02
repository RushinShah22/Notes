const mongoose = require("mongoose");
const app = require("./app.js");


// connecting to mongoDB
const mongoURI = process.env.MONGO_URL;

(async () => {
    try {
        const conn = await mongoose.connect(mongoURI);

        console.log(`MongoDB Connected`);

        // Starting App
        app.listen(process.env.PORT, () => {
            console.log("Listening on port 4000.");
        })
      
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  })();