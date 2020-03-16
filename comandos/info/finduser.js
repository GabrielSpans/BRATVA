const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("<a:emoji_30:675686441459646505> | Digite o Nome do Indivíduo a Ser Procurado!");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    message.channel.send(matches.cache.map(u => u.tag));

    message.delete();

     }
    
     module.exports.help = {
        name: "finduser",
        aliases: []
    }
