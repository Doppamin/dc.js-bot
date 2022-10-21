// const { token } = require("./config.json");

require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

const greetingList = [
  "sa",
  "sea",
  "selam",
  "selamun aleyküm",
  "selamunaleyküm",
];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  msg.reply(msg.content);
  if (msg.author.id == "758459168155238412") {
    msg.react("🤡");
    msg.reply("Yazdi yine tipini sevdiğim.");
    // msg.delete();
  }
  if (msg.author.id == "313284967214088196") {
    msg.react("💯");
  }
  if (msg.author.id == "142734522297876480") {
    msg.reply("Halil boş yapma.");
  }
});
client.on("message", (msg) => {
  if (
    // if msg.content is in the greetingList array
    greetingList.includes(msg.content.toLowerCase())
  ) {
    msg.reply("Aleyküm selam.");
  }
});

// 313284967214088196 myID
// 758459168155238412 Yunus's ID
// 142734522297876480 Halil's ID

client.login(process.env.TOKEN);
