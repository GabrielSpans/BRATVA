const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => { 

  try{
    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Você já trabalhou recentemente\n\nTente novamente em ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programador','Construtor','Médico','Cozinheiro','Mecânico','Eletricista']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Você trabalhou como ${replies[result]} e ganhou R$${amount} Reais!`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };

  } catch(e) {
    return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
 }
 
}

module.exports.help = {
    name: "work",
    aliases: ["trabalho", "trabalhar"]
  }
