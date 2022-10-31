console.log("Hello! I am Anya F-F-F-Forger!");
const Discord = require("discord.js");
const puppeteer = require("puppeteer");
require("dotenv").config();

async function anime(){
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://subsplease.org/")

}

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.login(process.env.TOKEN);

client.on("ready", readydisc);
function readydisc() {
  console.log("Ready to go!");
}

client.on("message", gotMessage);
async function gotMessage(msg) {
  console.log(msg.content);

  const mainCommand =
    " **Anya is a good helper!** \nCategories: \n``anime``: Anime commands \n``misc``: Miscellaneous commands \n\n To know the available commands for each category, use  ``a.help <category>``";
  let aniName;
  let tokens = msg.content.split(' '); 

 if (tokens[0] === "a.help") {
    msg.reply(mainCommand);
  }
  else if (tokens[0] === "a.help misc") {
    msg.reply(
      "``a.name``: Find out my name🦧 \n``a.address``: Where do I live \n``a.glen``: Find out some facts about Glen"
    );
  }
  else if (tokens[0] === "a.name") {
    msg.reply("I am Anya F-F-F-Fo-Forger...");
  }
  else if (tokens[0] === "a.address") {
    msg.reply("Anya's home!");
  }
  else if (tokens[0] === "anya") {
    msg.reply("Waku Waku!");
  }
  else if (tokens[0] === "a.anime"){
    let keywords = "boobs";
    if(tokens.length>1){
      keywords = tokens.slice(1, tokens.length).join(" ");
    }
    msg.reply(keywords);
  }

  
}
