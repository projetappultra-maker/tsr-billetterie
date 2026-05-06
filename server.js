const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTE TEST
app.get("/", (req, res) => {
  res.json({ message: "TSR API fonctionne 🚍" });
});

// ⚠️ TU METTRAS TON LIEN MONGODB PLUS TARD
// mongoose.connect("TON_MONGO_URL_ICI")
// .then(() => console.log("MongoDB connecté"))
// .catch(err => console.log(err));

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Serveur lancé sur port " + PORT);
});
