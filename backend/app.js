const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const NoteRoute = require("./Routes/NoteRoute");
const SignUpRoute = require("./Routes/SignUpRoute")
const SignInRoute = require("./Routes/SignInRoute");
const LogoutRoute = require("./Routes/LogoutRoute");
const UserRoute = require("./Routes/UserRoute")


dotenv.config({
    path: "./config.env"
});
const app = express();

app.use(cors({
    origin: "https://notes-eight-woad.vercel.app",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    console.log(res.cookies)
    next();
})

// Defining different Routes
app.use("/notes", NoteRoute);
app.use("/signup", SignUpRoute);
app.use("/signin", SignInRoute);
app.use("/logout", LogoutRoute);
app.use("/user", UserRoute);




module.exports = app;