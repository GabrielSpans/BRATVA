const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {  

  try{

    let embed = new Discord.RichEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: R$ 3500 Reais! [.buy bronze]\n\n**Roleplay items**\n\nNikes: R$ 600 Reais [.buy nike]\nCarro: R$ 800 Reais [.buy carro]\nMansão: R$ 1200 Reais [.buy mansão]")
    .setColor("RANDOM")
    message.channel.send(embed)

  } catch(e) {
    return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
 }
 
}


module.exports.help = {
  name:"loja",
  aliases: ["store", "shop"]
}