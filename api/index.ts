import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";
import {moods}  from './data/moods';

const express = require("express"); const app = express();
require('dotenv').config();

const chat = new ChatOpenAI({
    temperature: 0.9,
    openAIApiKey: process.env.OPENAI_API_KEY,
    model:'gpt-4o-mini'
  });

app.get("/test", async (req, res) => {

    const random = Math.floor(Math.random() * (moods.length - 0 + 1)) + 0;
    const randomMood = moods[random];

    try {
        await chat.invoke([new HumanMessage({ content: `Generate a completely random thought provoking question in the mood of ${randomMood}` })]).then(async (resp: any) => {
            await chat.invoke([new HumanMessage({ content: resp.content })]).then((resp: any) => {
                res.send(resp);
            })
        });
    } catch(e) {
        res.send(e);
    }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;