const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

  try {
let killed = message.mentions.members.first();
if(!killed) {

let emb = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`${message.author} decidiu se matar 💔 DESCANSE EM PAZ`)

message.channel.send(emb)

} else {

let emb = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`${killed} foi morto por ${message.author} 💔 DESCANSE EM PAZ`)

message.channel.send(emb)


} 

} catch(e) {
  return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
}

}

module.exports.help = {
  name: "kill",
  aliases: ["suicidio", "assasinar"]
}