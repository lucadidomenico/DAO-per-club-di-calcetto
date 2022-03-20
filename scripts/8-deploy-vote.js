import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x0958899eE4F745aAc9df92484d6E70229EbAC564",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({

      name: "Calcetto DAO Proposte",
      votingTokenAddress: "0x75DE98BfB1fE75E92654A9252e068e97EC4c8F92",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();