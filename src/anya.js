console.log("Hello! I am Anya F-F-F-Forger!");
const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.login(process.env.TOKEN);

client.on("ready", readydisc);
function readydisc() {
  console.log("Ready to go!");
}

client.on("message", gotMessage);
function gotMessage(msg) {
  console.log(msg.content);
  if (msg.content === "a.help") {
    msg.reply(
      " **Anya is a good helper!** \nCategories: \n``anime``: Anime commands \n``misc``: Miscellaneous commands"
    );
  }
  if (msg.content === "a.help misc") {
    msg.reply(
      "``a.name``: Find out my name🦧 \n``a.address``: Where do I live \n``a.glen``: Find out some facts about Glen"
    );
  }

  if (msg.content === "a.name") {
    msg.reply("I am Anya F-F-F-Fo-Forger...");
  }
  if (msg.content === "a.address") {
    msg.reply("Anya's home!");
  }
  if (msg.content === "a.glen") {
    msg.reply("GLen is a pandaboi");
  }
  if (msg.content === "!gif") {
  }
}
