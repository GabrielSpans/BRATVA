const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
let bicon = bot.user.displayAvatarURL;
let donateEmb = new Discord.RichEmbed()
.setColor("#00ff00")
.setTitle("Doar")
.setDescription("Doe para o bot através deste link!")
.addField("PayPal Donate", "[PayPal](https://paypal.me/odar)")
.setFooter("Links de doação para o bot!")
.setThumbnail(bicon)

message.channel.send(donateEmb)

message.delete();

}

module.exports.help = {
  name: "doar",
  aliases: ["donate"]
}