const Discord = require("discord.js");

module.exports.run = async (client, message, args, emoji) => {

    try {
    let google = args.slice(0).join('+');
    if(!google) return message.channel.send("<a:emoji_30:675686441459646505> | Defina um Argumento Válido para eu perquisar!")

        let link = `https://www.google.com/search?q=` + google;
        if(!link)return message.channel.send("<a:emoji_30:675686441459646505> | Erro Para Procurar o Link!")

        let embed = new Discord.MessageEmbed()
    
  .setColor("#0d66d4")
 .setThumbnail('https://static1.squarespace.com/static/50ff1acce4b047a6c7999c73/59d7dba1f6576ed92f017582/59fb85648e7b0f7a6307b756/1509730530324/Google+Attract+Loop+%28dribbble%29+2.gif?format=500w')
    .setTimestamp()
    .addField("🔎 Pesquisando:", `${args.slice(0).join(' ')}`)
    .addField('🔗 Link:', `[Clique Aqui](${link})`)
    .setFooter(`Pesquisa solicitada por: ${message.author.tag}`, message.author.avatarURL())
          
    message.channel.send(embed);

} catch(e) {
    return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
 }
  
}

module.exports.help = {
    name: "google",
    aliases: ["procurar", "pesquisar"]
}