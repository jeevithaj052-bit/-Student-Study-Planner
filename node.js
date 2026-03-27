const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Study Planner Server Running");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});