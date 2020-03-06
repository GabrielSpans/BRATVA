const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => { 

  try{

  let user = message.author;

  let timeout = 86400000;
  let amount = 200;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<a:emoji_30:675686441459646505> | Você Já Recebeu Sua Recompensa Diária!\nColete-o Novamente Em ${time.hours}hrs ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<a:emoji_31:675686482283069480> | Você Coletou Sua Recompensa Diária!`);
  moneyEmbed.footer(`Recebeu: R$${amount}`)
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


  }

} catch(e) {
  return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
}

};


module.exports.help = {
    name: "daily",
    aliases: ["diária"]
}