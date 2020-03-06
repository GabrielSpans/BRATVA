const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, utils) => {

  try{

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**${user}'s Você tem um Saldo de:**\n\nBolso: ${bal}\nBanco: ${bank}`);
  message.channel.send(moneyEmbed)

} catch(e) {
  return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
}

};

module.exports.help = {
    name: "money",
    aliases: ["dinheiro", "balance", "bal"]
}