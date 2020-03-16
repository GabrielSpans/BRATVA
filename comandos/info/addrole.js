const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("❌ | Sem Permissião.")
   
    let rMember = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("❌ | Mencione Um Usuário Valído!")
    let role = message.guild.roles.find(r => r.name === args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("❌ | Mencione Uma Role Existente!")
    
    if(!message.guild.me.hasPermission(["MANAGE_ROLES"])) return message.channel.send("❌ | Não Tenho Permissão!")

    if(rMember.roles.has(role.id)) {
        return message.channel.send(`${rMember.displayName}, Adicionado a role!`)
    } else {
        await rMember.roles.add(role.id).catch(e => console.log(e.message))
        message.channel.send(`<@${message.author.id}> | Role Adicionada em <@${rMember.id}>\*\*`)
    }

}

module.exports.help = {
    name: "addrole",
    aliases: []
}
