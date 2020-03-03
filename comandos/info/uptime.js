const Discord = require('discord.js');
let days = 00;
let week = 00;

module.exports.run = async (client, message, args) => {

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

    uptime += `${days} Dias, ${hours}:${minutes}:${seconds}`;

    let serverembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('Uptime', uptime);

    message.channel.send(serverembed);

}

module.exports.help = {
    name: "uptime",
    aliases: ["ativo"]
}