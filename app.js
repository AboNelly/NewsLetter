const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const mailchimp = require("@mailchimp/mailchimp_marketing");

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  mailchimp.setConfig({
    apiKey: "75efb6d0923f163f999f48563412b4c5",
    server: "us13",
  });

  const run = async () => {
    try {
      const response = await mailchimp.lists.setListMember(
        "eca38a0089",
        "subscriber_hash",
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        }
      );

      console.log(response);
      res.sendFile(__dirname + "/success.html");
    } catch (e) {
      console.log(e.status);
      res.sendFile(__dirname + "/failure.html");
    }
  };

  run();
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
