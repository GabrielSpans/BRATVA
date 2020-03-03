const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async(client, message, args) => {

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Mencione um membro válido deste servidor");
    let Reason = args.slice(1).join(` `);
    if (!Reason) Reason = "Não definido"

    
    message.guild.fetchBans()
    .then(bans => {
    if (bans.some(u => User.includes(u.username))) {
    let user = bans.find(user => user.username === User);
    
    message.guild.unban(member.id, Reason);
    } 
    else if (bans.some(u => User.includes(u.id))) {
    
    message.guild.unban(User, Reason);
    } 
    else {
    return message.reply(`Esta pessoa não esta banida!`);
    }

    let onoff = db.get(`modlog.${message.guild.id}.on`)
let channel = db.get(`modlog.${message.guild.id}.channel`)
if (!onoff) return;
if(!channel) return;

if (onoff == true) {
    let logs = message.guild.channels.get(channel)
let embed = new Discord.RichEmbed()
.setColor("BLACK")
.setAuthor(`🔨 | Privatizar unbans (Membro)`)
.setDescription(`Author: ${message.author.username}\n${message.author.id}\nDesbanido: ${member.user.tag}\n${member.id}`)

logs.send(embed)
}
});
}

module.exports.help = {
    name: "unban",
    aliases: ["desbanir"]
}