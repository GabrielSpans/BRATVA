const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

const db = require('quick.db')

const client = new Discord.Client()

let days = 00;
let week = 00;

module.exports.run = async (bot, message, args) => {

  try {
  function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " dia" : " dias") + " atrás";
};

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

    const duration = moment.duration(client.uptime).format(" D [dias], H [horas], m [minutos], s [segundos]");

    let bicon = bot.user.displayAvatarURL();
    let date = bot.user.createdAt

    let embed = new Discord.MessageEmbed()
    embed.setAuthor(`Olá, eu me chamo B R A T V A!`, bot.user.displayAvatarURL())
    embed.setColor("BLUE")
    embed.setThumbnail(bicon)
    embed.setDescription(`<a:fixa:686684295644839966> Olá eu me chamo ${bot.user.username}, tenho 23 anos e sou um simples bot brasileiro para o Discord com vários comandos!\n\n<a:fixa:686684295644839966> Atualmente estou espalhando diversão em \*\*${bot.guilds.cache.size} servidores\*\* com \*\*${bot.commands.size} comandos\*\*. Desde ${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)}) venho tentanto trasnformar o mundo em um lugar melhor!\n\n<a:fixa:686684295644839966> Eu fui criado em <:js:675685205595652096> [Javascript](https://discord.js.org) utilizando <:node:686684261734023236> [node.js](https://nodejs.org).`)
    embed.setTimestamp()
    
    message.channel.send(embed);

  } catch(e) {
    message.channel.send(e)
  }

}


// e já executei ${comandos} comandos desde que eu acordei a \*\*${duration}\*\* atrás


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