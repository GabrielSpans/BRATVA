const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let inline = true
    let resence = true
    const status = {
        online: "Online",
        idle: "Ausente",
        dnd: "Não pertube",
        offline: "Offline/Invisivel"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "Sim";
  } else {
    bot = "Não";
  }

            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("RANDOM")
                .addField("Nick", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Apelido", `${member.nickname !== null ? `${member.nickname}` : "Sem apelido"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Jogando", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Não estou jogando"}`,inline, true)
                .addField("Tags", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Sem Roles"}`, true)
                .addField("Entrou no Discord:", member.user.createdAt)
                .setFooter(`Informações do usurario: ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

    module.exports.help = {
      name: "userinfo",
      aliases: ["usuarioinfo", "ui"]
  }