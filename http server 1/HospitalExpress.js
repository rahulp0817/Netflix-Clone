const express = require("express");
const app = express();
const port = 3000;

const users = [{
  name: "Michael",
  pronouns: "He/Him",
  address: "Delhi",
  age: 29,
  kidneys: [{
    healthy: false,
  }],
}];

app.use(express.json());

app.get("/", function (req, res) {
  const Michaelkidneys = users[0].kidneys;
  const healthykidneys = Michaelkidneys.filter(kidney => kidney.healthy).length;
  const unhealthykidneys = Michaelkidneys.length - healthykidneys;

  res.json({
    healthykidneys: healthykidneys,
    unhealthykidneys: unhealthykidneys,
    Michaelkidneys: Michaelkidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({
    msg: "done!",
    Michaelkidneys: users[0].kidneys,
  });
});

app.delete("/", function (req, res) {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      newKidneys.push(users[0].kidneys[i]);
    }
  }

  users[0].kidneys = newKidneys;

  res.json({
    msg: "Done",
    Michaelkidneys: users[0].kidneys,
  });
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
