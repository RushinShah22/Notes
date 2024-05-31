const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const NoteRoute = require("./Routes/NoteRoute");
const SignUpRoute = require("./Routes/SignUpRoute")


dotenv.config({
    path: "./config.env"
});
const app = express();


app.use(express.json());
app.use(cookieParser());
// Defining different Routes
app.use("/notes", NoteRoute);
app.use("/signup", SignUpRoute);




module.exports = app;