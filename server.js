const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./server/routes/routes");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "dist/customerList")));

//middle ware
// app.use('/',index)
app.use("/", routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//catch all other routes request and return it to the index
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/customerList/index.html"));
});




app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
