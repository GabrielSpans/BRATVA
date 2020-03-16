const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    let user = message.mentions.members.first() || message.member;
    let string = ''
    message.channel.permissionsFor(user).toArray().map(p => string += `${p.charAt(0) + p.toLowerCase().replace(/_/g, ' ').slice(1 ,).replace(`vad`, `VAD`)}**  **`)
    let finalStr = string 
    let embed = new Discord.MessageEmbed()
    .setDescription(`[Permissões de ${user} em ${message.guild.name}](${message.guild.iconURL()})\n\`\`Lista de Permissões:\`\`\n\n` + '' + finalStr + '')
    .setColor('#81BEF7')
       .setTimestamp(new Date())
             .setFooter(message.author.tag, message.guild.iconURL)
           .setThumbnail(message.guild.iconURL)
    message.channel.send(embed)
};

module.exports.help = {
    name: 'permuser',
    aliases: ["userperm"]
}