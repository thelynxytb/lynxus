const Discord = require("discord.js")

var bot = Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("like les video de lynx");
    
})console.log("Le bot a bien ete connecte");

bot.login("NDI3MjQxNzU0NTQzMjU5NjYx.DZiKfA.vHAmiivacEbSPoU1YZz9Wgp-3rc");
