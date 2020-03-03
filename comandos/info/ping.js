const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    const m = await message.channel.send("Ping?");

    let embed = new Discord.RichEmbed()
    .addField("Lâtencia", `${m.createdTimestamp - message.createdTimestamp}ms`)
    .addField("Lâtencia da API", `${Math.round(client.ping)}ms`)
  m.edit(embed);
  
}

module.exports.help = {
  name: "ping",
  aliases: ["latência"]
}