const Discord = require('discord.js')
var jimp = require('jimp');
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("Você não tem permissão `ADMINISTRATOR`")

 let cArgs = args[0]
 
 if(isNaN(cArgs)) return message.channel.send("Você não especificou um ID de um canal Valído!")
	 
 try{
	 bot.guilds.get(message.guild.id).channels.get(cArgs).send("Canal de Welcome setado!")
	 
 db.set(`${message.guild.id}`, cArgs)
 
 message.channel.send("Você setou o canal de bem-vindo em: <#" + cArgs + ">")
return;
 }catch(e){
	return message.channel.send("Error: Não tenho permissão no canal!")
 }
 
 
}
module.exports.help = {
  name: "set-channel",
  aliases: ["set-welcome"]
}