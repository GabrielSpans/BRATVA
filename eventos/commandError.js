const Discord = require('discord.js');

module.exports = function (client, command, error) {

    let commands = 
        client.channels.cache.get("670013321029746714")
    commands.send(`O comando ${command.name} Esta com Erro!\n\nErro:\n${error.toString()}`)

}