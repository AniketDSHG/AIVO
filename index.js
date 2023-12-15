const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Connect } = require("./Connect/db");
const router = require("./Router/Route");

const PORT = 5000;
const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "5000mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5000mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(cors());

Connect();

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`${PORT} is on live`);
});
