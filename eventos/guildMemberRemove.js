const Discord = require('discord.js')
const db = require('quick.db');

module.exports = (client, member, message) => {

    
        let wChan = db.fetch(`${member.guild.id}`)
	
	if(wChan == null) return;
	
  if(!wChan) return;


        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(member.user.displayAvatarURL)
        .setAuthor(`👋 | Saida`, member.user.displayAvatarURL)
        .setDescription(`**${member.user.tag}** Saiu do servidor.`)
        .setFooter(`ID do usúario: ${member.user.id}`)

        
        member.guild.channels.get(wChan).send(embed)
    
}