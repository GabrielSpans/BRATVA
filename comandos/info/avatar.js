const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
let user;
    user = message.mentions.users.first(); 
    if (!user) { 
    if (!args[0]) { 
    user = message.author;
    getuseravatar(user);
    } else { 
    let id = args[0]
    client.fetchUser(id).then(user => {
    getuseravatar(user) 
    
    }).catch(error => console.log(error))
    
    }
    
    } else { 
    getuseravatar(user);
    }
    function getuseravatar(user) {
    let embed = new Discord.RichEmbed()
    .setAuthor(`🖼️ ${user.username}`)
    .setDescription(`**Clique [aqui](${user.avatarURL}) para baixar a imagem!**`)
    .setColor("RANDOM") 
    .setImage(user.avatarURL)
    message.channel.send(embed)
    
    }
}

module.exports.help = {
    name: "avatar",
    aliases: []
}