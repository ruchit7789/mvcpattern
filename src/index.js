const express = require("express");
const { adminRoute } = require("./routes/adminroute");

const app = express();
require("dotenv").config();

let PORT = process.env.PORT;

/////////////////////////

app.use(adminRoute);

//////////////////
app.listen(PORT, () => {
  console.log("appp is working great" + " " + PORT);
});
