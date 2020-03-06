const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    try {
    let user = message.mentions.users.first();

        if(message.mentions.users.size < 1) return message.channel.send("<a:emoji_30:675686441459646505> | Mencione Um Usúario Valido!")
        if(user.id == message.author.id) return message.channel.send("<a:emoji_30:675686441459646505> | Não é Possível Abraçar a si Mesmo!")

        let HugEmbed = new Discord.MessageEmbed()

        .setColor('ff756')
        .setDescription(`<@${message.author.id}> Deu um Abraço em <@${user.id}>`)
        .setImage('https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif')
        .setFooter(message.author.avatarURL())
        .setTimestamp()
    
        message.channel.send(HugEmbed)

    } catch(e) {
        return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
     }
}

module.exports.help = {
    name: "abraçar",
    aliases: ["hug", "hugs"]
}