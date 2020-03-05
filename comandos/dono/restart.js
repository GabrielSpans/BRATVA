const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if (message.author.id !== "292708406278619136") return message.channel.send(`<@${message.author.id}> | Você não é meu dono!`)

    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:emoji_31:675686482283069480> | Bot Reiniciado em **${Math.floor(client.ping)}**ms`);
    message.channel.send(embed)
        .then(() => client.destroy())
        .then(() => client.login("NjY4OTIyMjc3MTM1Mzg0NTg2.XmBEnQ.tOH-WnTY893KFuoCUbDcc30Dhc4"));

}

module.exports.help = {
    name: "restart",
    aliases: ["reiniciar", "reset"]
}
