const Discord = require('discord.js')
const ytdl = require('ytdl-core')

module.exports.run = async (client, message, args, ops) => {

    //if(!message.member.voiceChannel) return message.channel.send('entre em um canal')
    if(message.guild.me.voiceChannel) return message.channel.send('o bot ja esta em um canal')
    if(!args[0]) return message.reply('coloque um URL valido')

    let validate = await ytdl.validateURL(args[0])
    if(!validate) return message.channel.send('coloque um URL valido para reproduzir')

    let info = await ytdl.getInfo(args[0])
    let length_seconds = info.length_seconds
    //console.log(info)
    let connection = await message.member.voice.channel.join()
    await message.delete().catch(O_o=>{})
    let dispatcher = await connection.play(ytdl(args[0], {
        filter: 'audioonly'
    }));
    let embed = new Discord.MessageEmbed()
    .setTitle('Tocando:')
    .addField('Música:', `${info.title}`)
    .setThumbnail(info.thumbnailURL)
    message.channel.send(embed)
}

module.exports.help = {
    name: "testin",
    aliases: []
}