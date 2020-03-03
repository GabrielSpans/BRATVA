const Discord = require("discord.js");

const client = new Discord.Client()

let days = 00;
let week = 00;

module.exports.run = async (bot, message, args) => {

  let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if(hours > 24){
        days = days + 01;
        hours = 00;
    }

    if(days == 7){
        days = 00;
        week = week + 01;
    }

    if(week > 00){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 00;
    }
    uptime += `${hours}0:${minutes}:${seconds}`;

    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let comandos = bot.commands.size
    let servsize = bot.guilds.size
    let date = client.users.createdAt
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Nome do BOT", `${bot.user.username}`, inline)
    .addField("Dono do Bot", "! O ઽραท「ᴏʟᴅ」#0001", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Canais", `📁 ${chansize}`, inline)
    .addField("Usúarios", `${usersize}`, inline)
    .addField("Comandos", `${comandos}`, inline)
    .addField("Biblioteca do Bot", "Discord.js", inline)
    .addField('Estou online a', uptime)
    .addField('Criado em', formatDate('DD/MM/YYYY, às HH:mm:ss'))
    .setFooter(`Informação sobre: ${bot.user.username}. Criado por: ! O ઽραท「ᴏʟᴅ」#0001`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

/**
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
 
function formatDate (template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
  }

  module.exports.help = {
    name: "botinfo",
    aliases: ["infobot", "bi"]
}