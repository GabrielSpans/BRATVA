const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    
    if (message.author.id !== "292708406278619136") return message.channel.send(`<@${message.author.id}> | Você não é meu dono!`)


try {

    await message.channel.send("<a:emoji_31:675686482283069480> | O Bot Foi Desligado Com Sucesso!");
    process.exit()
} catch(e) {
    message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Detectado!\nErro: \`\`\`${e.message}\`\`\``)
}
}

module.exports.help = {
    name: 'reboot',
    aliases: ['desligar']
}