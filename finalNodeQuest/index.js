import "dotenv/config";
const firstName = process.env.NAME;
const campusName = process.env.CAMPUS;

import cowsay from "cowsay";

console.log(
  cowsay.say({
    text: `Hello I'm ${firstName} from ${campusName}!`,
    e: "oO",
    T: "U ",
  })
);
