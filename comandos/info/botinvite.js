const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  try {

let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if(args[0]) {
        user = client.users.cache.get(args[0]);
    } 
    
    if (args[0] == null) { return message.channel.send(`**${message.author.username}**, você deve mencionar um bot!`)}
  const embed = new Discord.MessageEmbed()
  .addField(` Convite do(a) bot ${user.username} :`, `[Sem Permissões](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=0)
[Permissão Administrador](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=8)
[Todas Permissões](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=2146958591)`)
  .setFooter(message.author.tag, message.author.avatarURL())
  .setTimestamp(new Date())
  .setColor('BLUE')
   .setThumbnail(user.avatarURL())       
    if (user.bot) return message.channel.send(embed)
    message.channel.send(`**${message.author.username}**,  este usuário não é um **bot**!`)

} catch (err) {
    message.channel.send(`**${message.author.username}**, bobinho! Isto não é um **bot**!`)
}
}

module.exports.help = {
    name: "botinvite",
    aliases: []
}