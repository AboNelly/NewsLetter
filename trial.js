const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const trial = express();

trial.use(express.static(__dirname));
trial.use(express.json());
trial.use(express.urlencoded());

// const mailchimp = require("@mailchimp/mailchimp_marketing");

// mailchimp.setConfig({
//   apiKey: "YOUR_API_KEY",
//   server: "YOUR_SERVER_PREFIX",
// });

// async function run() {
//   const response = await mailchimp.ping.get();
//   console.log(response);
// }

// run();


const port = 5000;

app.listen(port, () => {
  console.log("running on port " + port);
});
