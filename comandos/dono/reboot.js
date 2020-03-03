const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (message.author.id !== "292708406278619136") return message.channel.send(`<@${message.author.id}> | Você não é meu dono!`)


try {

    await message.reply("O bot foi desligado.");
    process.exit()
} catch(e) {
    message.channel.send(`ERROR: ${e.message}`)
}
}

module.exports.help = {
    name: 'reboot',
    aliases: ['desligar']
}