const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if (message.author.id !== "292708406278619136") return message.channel.send(`<@${message.author.id}> | Você não é meu dono!`)

    const embed = new Discord.RichEmbed()
    .setTitle("Done.")
    .setDescription(`Restarted in **${Math.floor(client.ping)}**ms`);
    message.channel.send(embed)
        .then(() => client.destroy())
        .then(() => client.login("NjY4OTIyMjc3MTM1Mzg0NTg2.XiYUng.6Agh2cM7huE5IUIL5KxalaIJS-U"));

}

module.exports.help = {
    name: "restart",
    aliases: ["reiniciar"]
}
