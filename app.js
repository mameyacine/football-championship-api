const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const verifyToken = require('./middlewares/authMiddleware');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Connexion à la base de données
connectDB();

// Middleware global
app.use(bodyParser.json());

// Routes publiques
const authRoute = require("./routes/authRoute");
app.use("/auth", authRoute);

// Middleware de vérification du token pour les routes /api/*
app.use("/api", verifyToken);

// Routes protégées
const userRoute = require("./routes/userRoute");
app.use("/api/users", userRoute);


const countryRoute = require("./routes/countryRoute");
app.use("/api/countries", countryRoute);



const championshipRoute = require("./routes/championshipRoute");
app.use("/api/championships", championshipRoute);

const teamRoute = require("./routes/teamRoute");
app.use("/api/teams", teamRoute);

const teamChampionshipRoute = require("./routes/teamChampionshipRoute");
app.use("/api/teamChampionships", teamChampionshipRoute);


const dayRoute = require("./routes/dayRoute");
app.use("/api/days", dayRoute);


const gameRoute = require("./routes/gameRoute");
app.use("/api/games", gameRoute);








// Lancer serveur
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}...`);
});



