const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    
    let user = message.guild.member(message.mentions.users.first());
    if(!args[0]) return message.channel.send(`<a:emoji_30:675686441459646505> | Mencione um Usuário Válido Desse Servidor!`)
    if(!user) return message.channel.send('<a:emoji_30:675686441459646505> | Mencione um Usuário Válido Desse Servidor!');
    if(user.user.id == message.author.id) return message.channel.send('<a:emoji_30:675686441459646505> | Você Não Pode Atirar em Sí Mesmo!');

    let aEmbed = new Discord.MessageEmbed()

    .setTimestamp()
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> deu um **TIRO** em: <@${user.user.id}>`)
    .setImage('https://media.giphy.com/media/137qIhWsIf9bDW/giphy.gif')
    .setTimestamp()

    try {
        message.delete();
        message.channel.send(aEmbed);
    }catch (error) {
        console.log(error);
        message.channel.send(error);
    }
}

module.exports.help = {
    name: "tiro",
    aliases: ['atirar']
}