const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

try {
  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<a:emoji_31:675686482283069480> | Adicionado R$${args[1]} Reais na conta!`);
    moneyEmbed.footer(`Saldo: R$${bal}`)    
    message.channel.send(moneyEmbed)

} catch(e) {
  return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
}

};

module.exports.help = {
    name: "addmoney",
    aliases: ["add-money"]
}