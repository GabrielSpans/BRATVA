const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    
    if (message.author.id !== "292708406278619136") return message.channel.send(`<@${message.author.id}> | Você não é meu dono!`)

    

    if (!args[0]) {

        let embed = new Discord.RichEmbed()
        .setDescription("=Reload=\n1 - diversão\n\n2 - dono\n\n3 - economia\n\n4 - info\n\n5 - moderação")
        message.channel.send(embed)
    }  else if(args[0] == "1") {

        let commandName = args[1].toLowerCase()
    try {
        delete require.cache[require.resolve(`../diversão/${commandName}`)]
        client.commands.delete(commandName)
        const pull = require(`../diversão/${commandName}`)
        client.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`<@${message.author.id}> | Erro no ao relogar \`${args[1].toUpperCase()}\` \nMotivo:\n ${e.message}`)
    }
    message.channel.send(`O comando \`${args[1].toUpperCase()}\` foi relogado!`)
}  else if(args[0] == "2") {

    let commandName = args[1].toLowerCase()
    try {
        delete require.cache[require.resolve(`../dono/${commandName}`)]
        client.commands.delete(commandName)
        const pull = require(`../dono/${commandName}`)
        client.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`<@${message.author.id}> | Erro no ao relogar \`${args[1].toUpperCase()}\` \nMotivo:\n ${e.message}`)
    }
    message.channel.send(`O comando \`${args[1].toUpperCase()}\` foi relogado!`)
}  else if(args[0] == "3") {

    let commandName = args[1].toLowerCase()
    try {
        delete require.cache[require.resolve(`../economia/${commandName}`)]
        client.commands.delete(commandName)
        const pull = require(`../economia/${commandName}`)
        client.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`<@${message.author.id}> | Erro no ao relogar \`${args[1].toUpperCase()}\` \nMotivo:\n ${e.message}`)
    }
    message.channel.send(`O comando \`${args[1].toUpperCase()}\` foi relogado!`)
}   else if(args[0] == "4") {

    let commandName = args[1].toLowerCase()
    try {
        delete require.cache[require.resolve(`../info/${commandName}`)]
        client.commands.delete(commandName)
        const pull = require(`../info/${commandName}`)
        client.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`<@${message.author.id}> | Erro no ao relogar \`${args[1].toUpperCase()}\` \nMotivo:\n ${e.message}`)
    }
    message.channel.send(`O comando \`${args[1].toUpperCase()}\` foi relogado!`)
}   else if(args[0] == "5") {

    let commandName = args[1].toLowerCase()
    try {
        delete require.cache[require.resolve(`../moderação/${commandName}`)]
        client.commands.delete(commandName)
        const pull = require(`../moderação/${commandName}`)
        client.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`<@${message.author.id}> | Erro no ao relogar \`${args[1].toUpperCase()}\` \nMotivo:\n ${e.message}`)
    }
    message.channel.send(`O comando \`${args[1].toUpperCase()}\` foi relogado!`)
}
    
}

module.exports.help = {
    name: "reload",
    aliases: ["relog", "relogar", "atualizar"]
}