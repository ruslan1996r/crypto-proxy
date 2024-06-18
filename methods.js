const { ethers } = require('ethers');

const { pancakeRouter } = require('./src/contracts');
const { provider } = require('./src/provider');
const { BEP20_ABI } = require("./src/abis");

async function getPair(symbolA, symbolB) {
  const tokenA = new ethers.Contract(symbolA, BEP20_ABI, provider);
  const tokenB = new ethers.Contract(symbolB, BEP20_ABI, provider);

  const tokenAName = await tokenA.name();
  const tokenBName = await tokenB.name();

  const amountToCheck = "1";
  const value = await getValue(tokenA, tokenB, amountToCheck);

  console.log(`${amountToCheck} ${tokenAName} is equivalent to ${value} ${tokenBName}`);

  return value
}

async function getValue(tokenA, tokenB, amount) {
  const decimalsTokenA = await tokenA.decimals();
  const amountIn = ethers.utils.parseUnits(amount, decimalsTokenA).toString();

  const amountsOut = await pancakeRouter.getAmountsOut(amountIn, [tokenA.address, tokenB.address]);
  const decimalsTokenB = await tokenB.decimals();
  const amountOutEther = ethers.utils.formatUnits(amountsOut[1].toString(), decimalsTokenB);

  return amountOutEther;
}

module.exports = { getPair }