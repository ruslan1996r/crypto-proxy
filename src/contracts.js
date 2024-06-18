const { provider } = require("./provider");
const { ethers } = require("ethers");
require("dotenv").config();

const { PANCAKE_FACTORY_ABI, PANCAKE_ROUTER_ABI } = require("./abis");

// Define contract addresses from environment variables
const PANCAKE_FACTORY = process.env.PANCAKE_FACTORY;
const PANCAKE_ROUTER = process.env.PANCAKE_ROUTER;

const pancakeFactory = new ethers.Contract(PANCAKE_FACTORY, PANCAKE_FACTORY_ABI, provider);
const pancakeRouter = new ethers.Contract(PANCAKE_ROUTER, PANCAKE_ROUTER_ABI, provider);

module.exports = { pancakeFactory, pancakeRouter };