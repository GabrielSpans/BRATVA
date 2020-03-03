const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member) => {

    if (message.author.id !== "292708406278619136") return message.channel.send(`<@${message.author.id}> | Você não é meu dono!`)
    message.delete();
    message.channel.send("@everyone").then(msg => msg.delete(10000));
    let embed = new Discord.RichEmbed()
      .setTitle('📎 **Servidor - Notificar**')
      .setDescription('``Quer receber todas as notificações do servidor e de nossa loja?``\n ')
      .addField('🔔 Reaja a mensagem para ter todas as noticias e informações!' , 'Com ele, você será notificado de tudo que acontecer.')
      .setColor(3553598)
      message.channel.send(embed).then(msg => {
          msg.react("🔔");
          let filter1 = (reaction, user) => reaction.emoji.name === '🔔' && user.id === message.author.id
          let collector1 = msg.createReactionCollector(filter1, { time: 60000 })
          collector1.on('collect', r => {
            message.member.addRole(message.guild.roles.find(a => a.name ==='📰📥 Notificar Novidades').id).catch(console.error);
          })
        })
    }
module.exports.help = {
    name: "notificar",
    aliases: []
    }