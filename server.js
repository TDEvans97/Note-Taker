const express = require("express");
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
const port = process.env.port || 80;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

app.get("/", (req, res) => {
    console.log("Hello World!")
}); 

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});