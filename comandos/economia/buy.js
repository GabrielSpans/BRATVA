const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    try{

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Você precisa de R$  2000 Reais para comprar Bronze VIP`);

    if (args[0] == 'bronze') {
        if (author < 2000) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Você comprou bronze VIP por R$ 2000 Reais!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 2000)
        message.channel.send(Embed2)
    } else if(args[0] == 'nike') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Você precisa de R$ 600 Reais para comprar um nike.`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`nike_${message.guild.id}_${user.id}`)
        db.add(`nike_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Você comprou um nike por R$ 600 Reais!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'carro') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Você precisa de R$ 1000 Reais para comprar um carro!`);

        if (author < 1000) return message.channel.send(Embed2)
       
        db.fetch(`carro_${message.guild.id}_${user.id}`)
        db.add(`carro_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Você comprou um carro por R$ 1000 Reais!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansão') {
        let Embed2 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Você precisa de R$ 1600 Reais para comprar uma casa!`);

        if (author < 1600) return message.channel.send(Embed2)
       
        db.fetch(`casa_${message.guild.id}_${user.id}`)
        db.add(`casa_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Você comprou uma casa por R$ 1600 Reais!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1600)
        message.channel.send(Embed3)
    }

} catch(e) {
    return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
 }

}
  
  module.exports.help = {
    name:"buy",
    aliases: ["comprar"]
  }