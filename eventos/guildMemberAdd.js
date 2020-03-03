const Discord = require('discord.js')
const jimp = require('jimp');
const db = require('quick.db');

const moment = require("moment")
moment.locale("pt-BR")

module.exports = async (client, member) => {

  let roleId = db.get(`autorole_${member.guild.id}`);
  if(roleId) member.addRole(roleId).catch(console.error);

  
  let wChan = db.fetch(`${member.guild.id}`)
	
	if(wChan == null) return;
	
  if(!wChan) return;
 
  let embed = new Discord.RichEmbed()
  .setThumbnail(member.user.displayAvatarURL)
  .setAuthor(`👐 | Bem-Vindo(a)!`, member.user.displayAvatarURL)
  .setDescription(`Olá, seja bem-vindo(a) ao servidor ${member.guild.name}!`)
  .addField(`Dias no discord:`, `${moment().diff(member.user.createdAt, 'days')}`, true)
  .setFooter(`ID do usúario: ${member.user.id}`)

  await member.guild.channels.get(wChan).send(embed)

  let diasz = moment(new Date()).diff(member.user.createdAt, 'days')
  if(diasz < "2"){
    
  }

 
}
