// const { token } = require("./config.json");

require("dotenv").config();

const fs = require("fs");
const path = require("path");

const Discord = require("discord.js");
const client = new Discord.Client();

const greetingList = [
  "sa",
  "sea",
  "selam",
  "selamun aleyküm",
  "selamunaleyküm",
];

const blacklistFile = fs.readFileSync(
  path.join(__dirname, "blacklist.txt"),
  "utf-8"
);
const blacklist = blacklistFile.split("\n");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  // if msg contains any blacklist word
  if (greetingList.includes(msg.content.toLowerCase())) {
    msg.reply("Aleyküm selam.");
  }
  if (blacklist.some((word) => msg.content.toLowerCase().includes(word))) {
    msg.delete();
  }
  if (msg.author.id == "313284967214088196") {
    msg.react("💯");
  }
});

// 758459168155238412 Yunus's ID
// 142734522297876480 Halil's ID

var myID = "313284967214088196";

client.login(process.env.TOKEN);
