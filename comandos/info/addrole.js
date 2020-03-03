const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("❌ | Sem Permissião.")
   
    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("❌ | Mencione uma Role!")
    let role = message.guild.roles.find(r => r.name === args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("❌ | Mencione um Usúario")
    let reason = args.slice(2).join(" ")
    // if(!reason) return message.channel.send("Mencione uma razão!")
    
    if(!message.guild.me.hasPermission(["MANAGE_ROLES"])) return message.channel.send("❌ | Sem Permissão")

    if(rMember.roles.has(role.id)) {
        return message.channel.send(`${rMember.displayName}, Adicionado a role!`)
    } else {
        await rMember.addRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`A role, ${role.name}, foi adicionada em ${rMember.displayName}.`)
    }

}

module.exports.help = {
    name: "addrole",
    aliases: []
}
