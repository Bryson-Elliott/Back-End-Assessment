const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller.js'); 
const { response } = require("express");
// Stuck here with the controller, the hope was to create something 
// that would save their answer


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  const fortunes = ["Your quick wits will get you out of a tough situation",
        "Your dreams are never silly, depend on them to guide you",
        "Your ability is appreciated",
        "It takes courage to admit fault",
        "In order to take, one must first give",
  ];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
});

app.put("/api/restaurant", (req, res) => {
  res.status(200).send(res);
});
// console.log(response)

app.get('/api/uplifting-messages', ctrl.createMessage);

app.listen(4000, () => console.log("Server running on 4000"));
