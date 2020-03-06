const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    try {
if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send('<a:emoji_30:675686441459646505> | Você Não Tem Permissão de \`\`Gerenciar Mensagens\`\` Para Executar o Comando!')

let argsresult;
let mChannel = message.mentions.channels.first()

message.delete()
if(mChannel) {
    argsresult = args.slice(1).join(" ")
    mChannel.send(argsresult)
} else {
    argsresult = args.join(" ")
    message.channel.send(argsresult)
}

} catch(e) {
    return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
 }
 
}

module.exports.help = {
    name: "say",
    aliases: ["falar"]
}