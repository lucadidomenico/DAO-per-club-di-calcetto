import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x0958899eE4F745aAc9df92484d6E70229EbAC564");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "CalcettoDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "CALCETTO",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();