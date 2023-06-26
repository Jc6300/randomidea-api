const express = require("express");
require("dotenv").config();
const port = process.env.port || 5000;
const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
	res.json({ message: "Welcome to the RandomIdea API" });
});

const ideasRouter = require("./routes/ideas");

app.use("/api/ideas", ideasRouter);
app.listen(port, () => console.log(`Server listening on port ${port}`));
