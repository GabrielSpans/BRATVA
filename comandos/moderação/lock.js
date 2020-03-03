const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.delete(10000)

    if(!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(`<@${message.author.id}> | você não possui permissão para usar esse comando.`)
        
      }
      var lock = message.guild.roles.find("name","@everyone")
      message.channel.overwritePermissions(lock, {
        SEND_MESSAGES: false
      });
       
      message.channel.send(`🔒 | O canal ${message.channel} foi __bloqueado__ com sucesso.`);
        }

        module.exports.help = {
          name: "lock",
          aliases: ["trancar"]
      }