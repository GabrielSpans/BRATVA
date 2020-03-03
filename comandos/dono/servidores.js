const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if (message.author.id !== "292708406278619136") return message.channel.send(`<@${message.author.id}> | Você não é meu dono!`)

    message.delete()
    var user =  message.author;

    let servers = client.guilds 
    let a = (servers.map(se => `Nome: ${se.name} - ID: \`${se.id}\`\n`).slice(0,10))
    let b = (servers.map(se => `Nome: ${se.name} - ID: \`${se.id}\`\n`).slice(10,20))

    let embed = new Discord.RichEmbed()

    .setAuthor(`Servidores`)
    .setColor(`RANDOM`)
    .setDescription(a)

    let embed2 = new Discord.RichEmbed()

    .setAuthor(`Servidores`)
    .setColor(`RANDOM`)
    .setDescription(b)

    message.channel.send(embed).then(async msg2 => {
           
        await msg2.react('◀');
        await msg2.react('▶');
        await msg2.react('❌')

async function coletor() {
const collector = msg2.createReactionCollector((r, u) => (r.emoji.name === '◀' || r.emoji.name === '▶' || r.emoji.name === '❌') && u.id === message.author.id)
collector.on("collect", async (r, u, em) => {
let reaction = await msg2.reactions.find(val => val.name = r.emoji.name)

r.remove(r.users.filter(u => u === message.author).first());
        switch (r.emoji.name) {
        case '◀': 
        r.message.edit(embed)
        break;
        case '▶': 
        r.message.edit(embed2)
        break;
        case '❌': 
        r.message.delete()
        break;
        }
    })
}
coletor()
})
   

}

module.exports.help = {
    name: "servidores",
    aliases: ["server"]
}