const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, args) => {


    const user = client.users.get(message.author.id);

    /*(let helpEmbed = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}>, enviei no seu privado. se não estiver chegado , verifique as mensagens diretas nas configurações do servidor.`)
    .setImage('https://cdn.discordapp.com/attachments/660878678993141790/662501973077000202/ezgif-6-7059be12c874.gif')

    message.channel.send(helpEmbed)*/
    
    let menuEmbed = new Discord.RichEmbed()
	
	.setTitle("Help Menu")
	.setColor('RANDOM')
	.setDescription("Cada emote é uma opção, use as reações para ir para tal menu")
	.addField("Reações", 'Infos = 🗒 \n Admin = 🛠 \n Diversão = 💬 \n Voltar = 👈')
	.setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)
	.setTimestamp();
	
        var embed1 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Infos comandos")
        .setDescription("`.ping` **Veja o ping do bot** \n`.id` **Gera seu ID** \n`.avatar` **Veja seu ou o avatar de alguem!**\n`.botinfo` **Fique por dentro das informações do bot!** \n`.userinfo` **Pegue as informações do usuario!**\n`.serverinfo` **Pegue as informações do servidor!**\n`.finduser`  **Encontre um usúario!**") 
        .setColor("RANDOM")
        .setFooter(`${client.user.username} | Prefix: .`, client.user.avatarURL)
		.setTimestamp();
		
		var embed2 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Admin comandos")
        .setDescription("`.addrole` **Adicione uma tag em algúem!**\n`.takerole` **Remova a tag de algúem!**\n`.mute` **Mutar um usúario!**\n`.tempmute` **Mute um usúario por um tempo!**\n`.unmute` ** Desmute um usúario!**\n`.kick` **Expulse um usúario do servidor!**\n`.ban` **Bane um usúario do servidor!**\n`.clear` **Apague mensagens de um canal!**\n`.warn` **Avise um usúario do servidor!**\n`.lock` **Trave um chat para todos do servidor!**\n`.unlock` **Destrave um chat para todos do servidor!**") 
        .setColor("RANDOM")
        .setFooter(`${client.user.username} | Prefix: .`, client.user.avatarURL)
		.setTimestamp();
		
		var embed3 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Comandos de Diversão")
        .setDescription("`.say` **Diga algo através do bot!**\n`.8ball` **Pergunte algo ao bot!**\n`.clima` **Mostra o clima em um lugar!**\n`.urban` **Obter a definição de algo**\n`.cat` **Mostra uma foto aleatória de um gato**\n`.dog` **Mostra uma foto aleatória de um cachorro**\n`.kill` **Matar alguém**") 
        .setColor("RANDOM")
        .setFooter(`${client.user.username} | Prefix: .`, client.user.avatarURL)
		.setTimestamp();
        
        
        message.channel.send(menuEmbed).then(async msg2 => {
           
            await msg2.react('👈');
            await msg2.react('🗒️');
            await msg2.react('🛠️');
            await msg2.react('💬');
            await msg2.react('❌');

 async function coletor() {
  const collector = msg2.createReactionCollector((r, u) => (r.emoji.name === '🗒️' || r.emoji.name === '🛠️' || r.emoji.name === '💬' || r.emoji.name === '👈' || r.emoji.name === '❌') && u.id === message.author.id)
  collector.on("collect", async (r, u, em) => {
    let reaction = await msg2.reactions.find(val => val.name = r.emoji.name)
    
    r.remove(r.users.filter(u => u === message.author).first());
            switch (r.emoji.name) {
            case '🗒️':
            r.message.edit(embed1)
            break;
            case '🛠️': 
            r.message.edit(embed2)
            break;
            case '💬': 
            r.message.edit(embed3)
            break;
            case '👈': 
            r.message.edit(menuEmbed)
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
    name: "help",
    aliases: ["ajuda", "bed"]
}