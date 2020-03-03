const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {


    let msg = await message.channel.send("Gerando...").then(m => m.delete({ timeout: 5000, reason: 'Gerador do cat.' }))

    let {body} = await superagent
    .get('http://aws.random.cat/meow')
    //console.log(body.file)
    if(!{body}) return message.channel.send("<a:emoji_30:675686441459646505> | Erro ao Enviar a Imagem.")

    let cEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor('Miau Miau 🐱', message.guild.iconURL())
    .setImage(body.file)
    .setTimestamp()

    message.channel.send({embed: cEmbed})

    message.delete();

}

module.exports.help = {
    name: "cat",
    aliases: ["gato"]
}