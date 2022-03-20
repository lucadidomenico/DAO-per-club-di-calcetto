import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x0Ef8C75771F4440e1E608F13BB67a5d8179FeA44",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Tessera del club",
        description: "This NFT will give you access to the Calcetto DAO!",
        image: readFileSync("scripts/assets/tessera.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()