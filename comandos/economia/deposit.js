const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => { 

  try{
  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(" Você não tem dinheiro para depositar")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.guild.id}_${user.id}`, money)
    db.subtract(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Você depositou todas as suas moedas no seu banco!`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Especifique um valor para depositar`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Você não pode depositar dinheiro negativo`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Você não tem tanto dinheiro`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Você depositou R$ ${args[0]} Reais no Banco!`);

  message.channel.send(embed5)
  db.add(`bank_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
  }

} catch(e) {
  return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
}

}
module.exports.help = {
  name:"deposit",
  aliases: ["dep", "depositar"]
}