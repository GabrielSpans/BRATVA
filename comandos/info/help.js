const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, args) => {

    const user = client.users.cache.get(message.author.id)


    let helpEmbed = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}>, enviei meus comandos no seu privado. se não estiver chegado, verifique as mensagens diretas nas configurações do servidor.`)
    .setImage('https://cdn.discordapp.com/attachments/660878678993141790/662501973077000202/ezgif-6-7059be12c874.gif')

    message.channel.send(helpEmbed)
    
    let menuEmbed = new Discord.MessageEmbed()
	
    
    .setTitle(`📋Ajuda | Comandos📋`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Veja todos os meus comandos...`)
    .addFields(
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

        .setTitle(`👮 ADMINISTRAÇÃO 👮`)
        .setDescription(`\`\`ban ◻️ kick ◻️ unban ◻️ votekick\`\``)
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            { name: 'ADMINISTRAÇÃO - Clique 👮', value: '\`\`ban, kick, unban...\`\`' },
            { name: 'DIVERSÃO - Clique 😄', value: '\`\`8ball, abraçar, kill...\`\`' },
            { name: 'IMAGENS - Clique 🖼️', value: '\`\`cat, dog, hello...\`\`' },
            { name: 'INFO - Clique 💡', value: '\`\`ajuda, botinfo, serverinfo...\`\`' },
            { name: 'MODERAÇÃO - Clique 🔨', value: '\`\`clear, prefix, lock...\`\`' },
            { name: 'VOLTAR', value: 'clique 🏠' },
        )


		let embedDIV = new Discord.MessageEmbed()

        .setTitle(`😄 DIVERSÃO 😄`)
        .setDescription(`\`\`8ball ◻️ abraçar ◻️ kill ◻️ rps ◻️ say ◻️ ship ◻️ tiro\`\``)
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            { name: 'ADMINISTRAÇÃO - Clique 👮', value: '\`\`ban, kick, unban...\`\`' },
            { name: 'DIVERSÃO - Clique 😄', value: '\`\`8ball, abraçar, kill...\`\`' },
            { name: 'IMAGENS - Clique 🖼️', value: '\`\`cat, dog, hello...\`\`' },
            { name: 'INFO - Clique 💡', value: '\`\`ajuda, botinfo, serverinfo...\`\`' },
            { name: 'MODERAÇÃO - Clique 🔨', value: '\`\`clear, prefix, lock...\`\`' },
            { name: 'VOLTAR', value: 'clique 🏠' },
        )
		
        var embedIMG = new Discord.RichEmbed()
        
        .setTitle(`🖼️ IMAGENS 🖼️`)
        .setDescription(`\`\`cat ◻️ dog ◻️ hello ◻️ mcskin\`\``)
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            { name: 'ADMINISTRAÇÃO - Clique 👮', value: '\`\`ban, kick, unban...\`\`' },
            { name: 'DIVERSÃO - Clique 😄', value: '\`\`8ball, abraçar, kill...\`\`' },
            { name: 'IMAGENS - Clique 🖼️', value: '\`\`cat, dog, hello...\`\`' },
            { name: 'INFO - Clique 💡', value: '\`\`ajuda, botinfo, serverinfo...\`\`' },
            { name: 'MODERAÇÃO - Clique 🔨', value: '\`\`clear, prefix, lock...\`\`' },
            { name: 'VOLTAR', value: 'clique 🏠' },
        )

        let embedINFO = new Discord.MessageEmbed()

        .setTitle(`💡 INFO 💡`)
        .setDescription(`\`\`botinfo ◻️ botinvite ◻️ doar ◻️ id ◻️ invite ◻️ ping ◻️ recrutador ◻️ report ◻️ roleinfo ◻️ serverinfo ◻️ status ◻️ userinfo\`\``)
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            { name: 'ADMINISTRAÇÃO - Clique 👮', value: '\`\`ban, kick, unban...\`\`' },
            { name: 'DIVERSÃO - Clique 😄', value: '\`\`8ball, abraçar, kill...\`\`' },
            { name: 'IMAGENS - Clique 🖼️', value: '\`\`cat, dog, hello...\`\`' },
            { name: 'INFO - Clique 💡', value: '\`\`ajuda, botinfo, serverinfo...\`\`' },
            { name: 'MODERAÇÃO - Clique 🔨', value: '\`\`clear, prefix, lock...\`\`' },
            { name: 'VOLTAR', value: 'clique 🏠' },
        )

        
        let embedMOD = new Discord.MessageEmbed()
        .setTitle(`🔨 MODERAÇÃO 🔨`)
        .setDescription(`\`\`addemoji ◻️ addrole ◻️ lock ◻️ unlock ◻️ clear ◻️ mute ◻️ prefix ◻️ finduser ◻️ permuser ◻️ warn ◻️ set-channel ◻️ set-log ◻️ say ◻️ slowmode ◻️ tempmute ◻️ unmute`)
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
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
    let reaction = await msg2.reactions.find(val => val.name = r.emoji.name)
    
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