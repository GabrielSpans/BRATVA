const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    let motivo = args.slice(0).join(' ');
    if (motivo.length < 1) return message.channel.send('<a:emoji_30:675686441459646505> | Digite o Nick de Alguma Skin Premium!');
      
    let embed = new Discord.MessageEmbed()
    
    .setColor("ff756")
    .setImage(`https://minotar.net/armor/body/${args[0]}/490.png`)
    //.setDescription(`Instale a skin clicando [aqui](https://mc-heads.net/download/${args[0]})`)
    .setFooter(`${message.author.tag}`, message.author.avatarURL())
    .setTimestamp(new Date())
    message.channel.send(embed)
};

module.exports.help = {
    name: "mcskin",
    aliases: ["skin"]
}