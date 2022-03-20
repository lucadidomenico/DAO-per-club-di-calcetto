import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x75DE98BfB1fE75E92654A9252e068e97EC4c8F92",
);

(async () => {
  try {
    const amount = 1_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);

    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();
    
    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$CALCETTO in circulation",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();