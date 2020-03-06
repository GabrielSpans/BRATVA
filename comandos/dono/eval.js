const Discord = require("discord.js")
const { inspect } = require('util');

module.exports.run = async (client, message, args) => {

if (message.author.id !== "292708406278619136") return message.channel.send(`<@${message.author.id}> | Você não é meu dono!`)
    
try {
  let nylindao = args.join(" ");
  let nytotoso = eval(nylindao);

  if (typeof nytotoso !== 'string')
      nytotoso = require('util').inspect(nytotoso, { depth: 0 });
      
  let embed = new Discord.MessageEmbed()
  .setAuthor('Eval')
  .setColor('GREEN')
   .addField('Entrada', nylindao)
  .addField('Saída', nytotoso)

message.channel.send(embed)
} catch(e) {
  return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
}
}

module.exports.help = {
    name: "eval",
    aliases: []
}