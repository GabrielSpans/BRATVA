const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("Você não tem permissião de gerenciar Roles")
    if(args[0] == "help"){
        message.reply("Usa: !takerole @user @role");
        return;
    }
    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("Por favor, mencione a role a ser adicionada.")
    let role = message.guild.roles.find(r => r.name === args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("Mencione um usúario!")
    let reason = args.slice(2).join(" ")
    // if(!reason) return message.channel.send("Mencione uma razão!")
    
    if(!message.guild.me.hasPermission(["MANAGE_ROLES"])) return message.channel.send("Sem permissão")

    if(!rMember.roles.has(role.id)) {
        return message.channel.send(`${rMember.displayName}, Adicionado a role!`)
    } else {
        await rMember.removeRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`A role, ${role.name}, foi adicionada em ${rMember.displayName}.`)
    }

    let embed = new Discord.RichEmbed()
    .setColor("RED")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.icorURL)
.addField("Moderation", "Takerole")
.addField("Mutee:", rMember.user.name)
.addField("Moderator:", message.author.username)
.addField("Date:", message.createdAt)

let sChannel = message.guild.channels.find(c => c.name === "teste")
sChannel.send(embed)
}

module.exports.help = {
    name: "takerole",
    aliases: ["removerole", "roleremove"]
}