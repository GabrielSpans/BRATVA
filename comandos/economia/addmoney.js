const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
    let ownerID = '292708406278619136'
    if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(` Adicionado R$ ${args[1]} Reais na conta!\n\nNovo Saldo: R$ ${bal} Reais.`);
    
    message.channel.send(moneyEmbed)

};

module.exports.help = {
    name: "addmoney",
    aliases: ["add-money"]
}