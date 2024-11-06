require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 3000;

const app = express();
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/", express.static("./public", { extensions: ["html"] }));

const server = app.listen(port, () => {
	console.log("Express is online.");
	console.log("- http://localhost:" + port);
});