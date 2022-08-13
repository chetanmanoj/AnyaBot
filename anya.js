console.log('hello! i am anya forger!');
const Discord = require('discord.js');
require("dotenv").config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.login(process.env.TOKEN);

client.on('ready', readydisc);
function readydisc() {
    console.log("Ready to go!");
}

client.on('message', gotMessage);
function gotMessage(msg) {
    console.log(msg.content);
    if (msg.content === '!name') {
        msg.reply('I am Anya F-F-F-Fo-Forger...');
    }
    if (msg.content === '!address') {
        msg.reply("Anya's home!");
    }
    if (msg.content === '!glen') {
        msg.reply('GLen is a panda');
    }
    if (msg.content === '!gif') {

    }
}