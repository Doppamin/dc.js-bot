const { token } = require("./config.json");

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on("message", (msg) => {
//   if (msg.content === "ping") {
//     msg.reply("pong");
//   }
// });

// client.on("message", (msg) => {
//   if (msg.author.id == "313284967214088196") {
//     msg.delete();
//   }
// });

client.on("message", (msg) => {
  if (msg.author.id == "758459168155238412") {
    msg.react("🤡");
    msg.reply("Yazdi yine tipini sevdiğim");
    // msg.delete();
  }
});
client.on("message", (msg) => {
  if (msg.author.id == "313284967214088196") {
    msg.react("💯");
  }
});

// 313284967214088196 myID
// 758459168155238412 Yunus's ID

client.login(token);
