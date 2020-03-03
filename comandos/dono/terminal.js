const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (message.author.id !== "292708406278619136") return message.channel.send(`<@${message.author.id}> | Você não é meu dono!`)
    
    let y = process.openStdin()
    y.addListener("data", res => {
        let x = res.toString().trim().slipt(/ +/g)
        message.channel.send(x.join(" "))
    })
    let user = args.join(" ");
    if(!user) return message.reply("Insira uma mensagem!")
    await message.channel.send(`enviando ao terminal...\n\n mensagem: ${user}`)
    console.log(user)
    message.channel.send("mensagem enviada com sucesso!")
}

module.exports.help = {
    name: "terminal",
    aliases: ["cmd"]
}