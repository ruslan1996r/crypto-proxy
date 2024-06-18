const { ethers } = require('ethers');

const { getPair } = require("./methods")

const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()


const PORT = process.env.PORT || 4000;
const readyMsg = () => console.log('Server on http://localhost:' + PORT);


app.use(cors())
app.use(express.json())


app.post("/health", (_, res) => {
  res.send({ data: true });
})

app.post("/", async (req, res) => {
  const { symbolA, symbolB } = req.body

  res.send({ data: await getPair(symbolA, symbolB) });
})




app.listen(PORT, readyMsg);