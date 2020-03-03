const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()

    .setAuthor(`Convite | Invite`)
    .setDescription(`Convite\n[clique aqui](https://discordapp.com/oauth2/authorize?client_id=668922277135384586&scope=bot&permissions=8)\nServidor de Suporte\n[clique aqui](https://discord.gg/ACpuQJn)`)

    message.channel.send(embed)
}

module.exports.help = {
    name: "invite",
    aliases: ["convite", "add"]
}