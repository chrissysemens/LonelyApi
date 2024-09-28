const express = require("express"); const app = express();
require('dotenv').config();

app.get("/test", (req, res) => res.send(process.env.OPENAI_API_KEY));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;