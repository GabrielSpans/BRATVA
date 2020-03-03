const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true

    let role = args.join(` `)
    if(!role) return message.reply("Especifique uma role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Não foi possível encontrar essa tag!");

    const status = {
        false: "Não",
        true: "Sim"
      }

    let roleemebed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("ID", gRole.id, inline )
    .addField("Nome", gRole.name, inline)
    .addField("Menção", `\`<@${gRole.id}>\``, inline)
    .addField("Cor", gRole.hexColor, inline)
    .addField("Membros", gRole.members.size, inline)
    .addField("Posição", gRole.position, inline)
    .addField("Elevada", status[gRole.hoist], inline)
    .addField("Mencionável", status[gRole.mentionable], inline)
    .addField("Gerenciou", status[gRole.managed], inline)
    
    message.channel.send(roleemebed);

}

module.exports.help = {
  name: "roleinfo",
  aliases: ["cargoinfo"]
}