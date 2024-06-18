const { ethers } = require('ethers');
require('dotenv').config()

const BNB_ENDPOINT = process.env.BNB_ENDPOINT_URL

const provider = new ethers.providers.JsonRpcProvider(BNB_ENDPOINT);

module.exports = { provider }