const Discord = require("discord.js");
const ms = require("ms");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {


    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Você não tem permissão")
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "MUTE_MEMBERS"])) return message.channel.send("Você não tem permissão de adicionar Tags")

    let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply("mencione um usúario!");
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "RANDOM",
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }

let mutetime = args[1];
if(!mutetime) return message.reply("Você não especificou o tempo");

await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> Foi mutado por ${ms(ms(mutetime))}`);

setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Foi desmutado`);
}, ms(mutetime));


let reason = args.slice(2).join(" ");
if(!reason) reason = "Não definido"



let onoff = db.get(`modlog.${message.guild.id}.on`)
let channel = db.get(`modlog.${message.guild.id}.channel`)
if (!onoff) return;
if(!channel) return;

if (onoff == true) {
    let logs = message.guild.channels.get(channel)
let embed = new Discord.RichEmbed()
.setAuthor(`Mutado | Canais de texto e voz`)
.addField(`🔨 Moderador`, `${message.author.username}`)
.addField(`👤 Usuário`, `${tomute.user.username}`)
.addField(`⏱️ Tempo mutado`, `${ms(ms(mutetime))}`)
.addField(`🔹 ID do usuário`, `${tomute.id}`)
.addField(`📋 Motivo`, `${reason}`)
.setColor("BLACK")

logs.send(embed)
}
}

module.exports.help = {
    name: "tempmute",
    aliases: ["mutetime"]
}