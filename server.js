const express = require("express");
const app = express();
const cors = require("cors");
const presidents = require("./Presidents.js");
const res = require("express/lib/response");
const PORT = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(presidents.presidents);
});

app.get("/api/:presName", (req, res) => {
  const name = req.params.presName.toLowerCase();
  const presObj = presidents.presidents;
  presObj[name] ? res.json(presObj[name]) : res.json(presObj["unknown"]);
});

app.get("/api/party/:party", (req, res) => {
  let party = req.params.party;

  party = party.split(" ");
  for (let i = 0; i < party.length; i++) {
    party[i] = party[i][0].toUpperCase() + party[i].substr(1);
  }
  party = party.includes("Union") ? party.join(" ") : party.join("-");

  res.send(Object.values(presidents.presidents).filter((pres) => pres.politicalParty == party));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(__dirname + "/styles.css");
});
app.get("/main.js", (req, res) => {
  res.sendFile(__dirname + "/main.js");
});

app.listen(process.env.PORT || PORT, () => {
  console.log("hacked into the mainframe");
});
