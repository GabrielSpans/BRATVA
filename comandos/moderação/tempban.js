const ms = require("ms");
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sem permissão.");

    var user = message.guild.member(message.mentions.users.first());
    if (!user) return message.channel.send("Mencione um usúario Valído!");

    var reason = args.join(" ").slice(22);
    if(!reason) reason = "Nenhuma razão fornecida";

    var tempBanTime = args[1];

    if (ms(tempBanTime)) {

        await message.guild.member(user).ban(reason);

        message.channel.send(`${user} foi banido por <@${message.author.id}> por ${tempBanTime}`);

        setTimeout(function () {

            message.guild.unban(user.id);

            message.channel.send(`${user} foi desbanido!`);

        }, ms(tempBanTime));

    } else {
        return message.channel.send("Especifique um tempo válido.");
    }




}

module.exports.help = {
    name: "tempban",
    aliases: []
}