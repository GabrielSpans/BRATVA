const Discord = require('discord.js');
const backup = require("discord-backup");

module.exports.run = async (client, message, args, backupID, Guild, options) => {

    /*if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sem permissão de `ADMINISTRADOR` para executar esse comando!')

    if (!args[0]) {

        let embed0 = new Discord.RichEmbed()
        .setTitle("Server Backup")
        .setDescription("Use `.backup create` para criar um backup!")
        message.channel.send(embed0)

    } else if(args[0] == "create") {

        backup.create(Guild, options).then((backupData) => {
            console.log(backupData.id); // NSJH2
        });
    } else if(args[0] == "load") {

        backup.load(backupID, Guild).then(() => {
            backup.remove(backupID); 
        });
    }*/
    message.channel.send("Em breve")
}

module.exports.help = {
    name: "backup",
    aliases: []
}