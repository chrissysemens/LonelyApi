const express = require("express"); const app = express();
require('dotenv').config();

app.get("/test", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log(process.env.OPENAI_API_KEY));

module.exports = app;