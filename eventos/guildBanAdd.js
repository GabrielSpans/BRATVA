const Discord = require('discord.js')
const jimp = require('jimp');
const db = require('quick.db');

const moment = require("moment")
moment.locale("pt-BR")

module.exports = (client, message) => {

    try {

    let onoff = db.get(`modlog.${message.guild.id}.on`)
let channel = db.get(`modlog.${message.guild.id}.channel`)
if (!onoff) return;
if(!channel) return;


if (onoff == true) {

    let logs = message.guild.channels.get(channel)

    logs.send(`🔨 **| Banimento em massa**
    > **Autor:** ${message.author.username}
    ${message.author.id}`)


}
    } catch(e) {
        return;
    }

}