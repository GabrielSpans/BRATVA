const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, args) => {

    const user = client.users.cache.get(message.author.id)


    let helpEmbed = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}>, enviei meus comandos no seu privado. se não estiver chegado, verifique as mensagens diretas nas configurações do servidor.`)
    .setImage('https://cdn.discordapp.com/attachments/660878678993141790/662501973077000202/ezgif-6-7059be12c874.gif')

    message.channel.send(helpEmbed)
    
    let menuEmbed = new Discord.MessageEmbed()
	
    
    menuEmbed.setTitle(`📋Ajuda | Comandos📋`)
    menuEmbed.setThumbnail(client.user.displayAvatarURL())
    menuEmbed.setDescription(`Veja todos os meus comandos...`)
    menuEmbed.addFields(
        { name: 'ADMINISTRAÇÃO - Clique 👮', value: '\`\`ban, kick, unban...\`\`' },
        { name: 'DIVERSÃO - Clique 😄', value: '\`\`8ball, abraçar, kill...\`\`' },
        { name: 'IMAGENS - Clique 🖼️', value: '\`\`cat, dog, hello...\`\`' },
        { name: 'INFO - Clique 💡', value: '\`\`ajuda, botinfo, serverinfo...\`\`' },
        { name: 'MODERAÇÃO - Clique 🔨', value: '\`\`clear, prefix, lock...\`\`' },
        { name: 'VOLTAR', value: 'clique 🏠' },
        { name: 'Comandos Totais:', value: `${client.commands.size}` },
        { name: 'Quer Ser Parceiro do BRATVA e Ter Funções Premiuns?', value: 'Basta entrar em contato com meu dono, utilizando o comando **.botinfo**' },
        { name: 'Convite o bot para seu servidor:', value: '➡️ [Direct Link](https://discordapp.com/oauth2/authorize?client_id=668922277135384586&scope=bot&permissions=8)' },
    )

        let embedADM = new Discord.MessageEmbed()

        embedADM.setTitle(`👮 ADMINISTRAÇÃO 👮`)
        embedADM.setDescription(`\`\`ban ◻️ kick ◻️ unban ◻️ votekick\`\``)
        embedADM.setThumbnail(client.user.displayAvatarURL())
        embedADM.addFields(
            { name: 'ADMINISTRAÇÃO - Clique 👮', value: '\`\`ban, kick, unban...\`\`' },
            { name: 'DIVERSÃO - Clique 😄', value: '\`\`8ball, abraçar, kill...\`\`' },
            { name: 'IMAGENS - Clique 🖼️', value: '\`\`cat, dog, hello...\`\`' },
            { name: 'INFO - Clique 💡', value: '\`\`ajuda, botinfo, serverinfo...\`\`' },
            { name: 'MODERAÇÃO - Clique 🔨', value: '\`\`clear, prefix, lock...\`\`' },
            { name: 'VOLTAR', value: 'clique 🏠' },
        )


		let embedDIV = new Discord.MessageEmbed()

        embedDIV.setTitle(`😄 DIVERSÃO 😄`)
        embedDIV.setDescription(`\`\`8ball ◻️ abraçar ◻️ kill ◻️ rps ◻️ say ◻️ ship ◻️ tiro\`\``)
        embedDIV.setThumbnail(client.user.displayAvatarURL())
        embedDIV.addFields(
            { name: 'ADMINISTRAÇÃO - Clique 👮', value: '\`\`ban, kick, unban...\`\`' },
            { name: 'DIVERSÃO - Clique 😄', value: '\`\`8ball, abraçar, kill...\`\`' },
            { name: 'IMAGENS - Clique 🖼️', value: '\`\`cat, dog, hello...\`\`' },
            { name: 'INFO - Clique 💡', value: '\`\`ajuda, botinfo, serverinfo...\`\`' },
            { name: 'MODERAÇÃO - Clique 🔨', value: '\`\`clear, prefix, lock...\`\`' },
            { name: 'VOLTAR', value: 'clique 🏠' },
        )
		
        var embedIMG = new Discord.MessageEmbed()
        
        embedIMG.setTitle(`🖼️ IMAGENS 🖼️`)
        embedIMG.setDescription(`\`\`cat ◻️ dog ◻️ hello ◻️ mcskin\`\``)
        embedIMG.setThumbnail(client.user.displayAvatarURL())
        embedIMG.addFields(
            { name: 'ADMINISTRAÇÃO - Clique 👮', value: '\`\`ban, kick, unban...\`\`' },
            { name: 'DIVERSÃO - Clique 😄', value: '\`\`8ball, abraçar, kill...\`\`' },
            { name: 'IMAGENS - Clique 🖼️', value: '\`\`cat, dog, hello...\`\`' },
            { name: 'INFO - Clique 💡', value: '\`\`ajuda, botinfo, serverinfo...\`\`' },
            { name: 'MODERAÇÃO - Clique 🔨', value: '\`\`clear, prefix, lock...\`\`' },
            { name: 'VOLTAR', value: 'clique 🏠' },
        )

        let embedINFO = new Discord.MessageEmbed()

        embedINFO.setTitle(`💡 INFO 💡`)
        embedINFO.setDescription(`\`\`botinfo ◻️ botinvite ◻️ doar ◻️ id ◻️ invite ◻️ ping ◻️ recrutador ◻️ report ◻️ roleinfo ◻️ serverinfo ◻️ status ◻️ userinfo\`\``)
        embedINFO.setThumbnail(client.user.displayAvatarURL())
        embedINFO.addFields(
            { name: 'ADMINISTRAÇÃO - Clique 👮', value: '\`\`ban, kick, unban...\`\`' },
            { name: 'DIVERSÃO - Clique 😄', value: '\`\`8ball, abraçar, kill...\`\`' },
            { name: 'IMAGENS - Clique 🖼️', value: '\`\`cat, dog, hello...\`\`' },
            { name: 'INFO - Clique 💡', value: '\`\`ajuda, botinfo, serverinfo...\`\`' },
            { name: 'MODERAÇÃO - Clique 🔨', value: '\`\`clear, prefix, lock...\`\`' },
            { name: 'VOLTAR', value: 'clique 🏠' },
        )

        
        let embedMOD = new Discord.MessageEmbed()
        embedMOD.setTitle(`🔨 MODERAÇÃO 🔨`)
        embedMOD.setDescription(`\`\`addemoji ◻️ addrole ◻️ lock ◻️ unlock ◻️ clear ◻️ mute ◻️ prefix ◻️ finduser ◻️ permuser ◻️ warn ◻️ set-channel ◻️ set-log ◻️ say ◻️ slowmode ◻️ tempmute ◻️ unmute\`\``)
        embedMOD.setThumbnail(client.user.displayAvatarURL())
        embedMOD.addFields(
            { name: 'ADMINISTRAÇÃO - Clique 👮', value: '\`\`ban, kick, unban...\`\`' },
            { name: 'DIVERSÃO - Clique 😄', value: '\`\`8ball, abraçar, kill...\`\`' },
            { name: 'IMAGENS - Clique 🖼️', value: '\`\`cat, dog, hello...\`\`' },
            { name: 'INFO - Clique 💡', value: '\`\`ajuda, botinfo, serverinfo...\`\`' },
            { name: 'MODERAÇÃO - Clique 🔨', value: '\`\`clear, prefix, lock...\`\`' },
            { name: 'VOLTAR', value: 'clique 🏠' },
        )
        
        user.send(menuEmbed).then(async msg2 => {
           
            await msg2.react('🏠');
            await msg2.react('👮');
            await msg2.react('😄');
            await msg2.react('🖼️');
            await msg2.react('💡');
            await msg2.react('🔨');
            await msg2.react('❌');

 async function coletor() {
  const collector = msg2.createReactionCollector((r, u) => (r.emoji.name === '🏠' || r.emoji.name === '👮' || r.emoji.name === '😄' || r.emoji.name === '🖼️' || r.emoji.name === '💡' || r.emoji.name === '🔨' || r.emoji.name === '❌') && u.id === message.author.id)
  collector.on("collect", async (r, u, em) => {
    let reaction = await msg2.reactions.cache.find(val => val.name = r.emoji.name)
    
    //r.remove(r.users.filter(u => u === message.author).first());
            switch (r.emoji.name) {
            case '🏠':
            r.message.edit(menuEmbed)
            break;
            case '👮': 
            r.message.edit(embedADM)
            break;
            case '😄': 
            r.message.edit(embedDIV)
            break;
            case '🖼️':
                r.message.edit(embedIMG)
                break;
            case '💡':
                r.message.edit(embedINFO)
                break;
            case '🔨': 
            r.message.edit(embedMOD)
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
    name: "ajuda",
    aliases: []
}