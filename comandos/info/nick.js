const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

   
    let c2 = args.join(" ")

    message.channel.send(`<@${message.author.id}> **Nome alterado com sucesso!**`)
    message.member.setNickname(c2, "command name");

    message.delete()
}

module.exports.help = {
    name: "nick",
    aliases: ['name', 'nome', 'mudarnome', 'changenick']
}