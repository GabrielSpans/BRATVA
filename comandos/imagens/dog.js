const Discord = require('discord.js');
const superagent = require('superagent');
const bot = new Discord.Client()

module.exports.run = async (client, message, args) => {

    try {

    let msg = await message.channel.send("Gerando...").then(m => m.delete({ timeout: 5000, reason: 'Gerador do dog.' }))

    let {body} = await superagent
    .get('https://dog.ceo/api/breeds/image/random')
    //console.log(body.file)
    if(!{body}) return message.channel.send("<a:emoji_30:675686441459646505> | Erro ao Enviar a Imagem.")

    let dEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor('Au Au 🐶', message.guild.iconURL)
    .setImage(body.message)
    .setTimestamp()

    message.channel.send({embed: dEmbed})

    message.delete();

} catch(e) {
    return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
 }
}

module.exports.help = {
    name: "dog",
    aliases: ["cão", "cachorro"]
}