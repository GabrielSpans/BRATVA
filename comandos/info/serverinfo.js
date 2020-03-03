const Discord = require('discord.js');
const bot = new Discord.Client();
const moment = require("moment")
moment.locale("pt-BR")

    module.exports.run = (client, message, args) => {
        let user;
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else {
            user = message.author;
        }

    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let bot = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.guild.roles.map(a => a).join(", ")
    const serverembed = new Discord.RichEmbed()
    .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .setDescription("info:\n📑 Informações do servidor: ")
        .addField('Criador do servidor:', `<@${message.guild.owner.id}>`)
        .addField('Criado em:', moment(message.guild.createdAt).format('LLLL'))
        .addField("ID:", message.guild.id)
        .addField(`Membros [${totalmembros}]`, `Online: ${online}\nAusente: ${ausente}\n Ocupado: ${ocupado}\n Offline: ${offline}\n Bots: ${bot}`)
        .addField(`Canais [${canaistexto+canaisvoz}]`, `Texto: ${canaistexto}\n Voz: ${canaisvoz}`)
        .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
        const embed = new Discord.RichEmbed()        .setTitle(`Informações do servidor **${message.guild.name}**`)
        .setColor("#0051FF")
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .setDescription("📑 Informações do servidor:")
        .addField('Criador do servidor:', `<@${message.guild.owner.id}>`)
        .addField('Criado em:', moment(message.guild.createdAt).format('LLLL'))
        .addField("ID:", message.guild.id)
        .addField(`Membros [${totalmembros}]`, `Online: ${online}\nAusente: ${ausente}\n Ocupado: ${ocupado}\n Offline: ${offline}\n Bots: ${bot}`)
        .addField(`Canais [${canaistexto+canaisvoz}]`, `Texto: ${canaistexto}\n Voz: ${canaisvoz}`)
       
        if(message.guild.id === '213') return message.reply(serverembed)
message.reply(embed)
    }

    module.exports.help = {
        name: "serverinfo",
        aliases: ["servidorinfo", "si"]
    }