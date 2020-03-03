/*const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '292708406278619136' && message.author.id !== '633396539347173396') return message.reply(" | você não possui permissão para usar esse comando.")
  

    message.delete()
let mensagem = args.join(" ")
   const membros = message.guild.memberCount;
   try{
    message.guild.members.map(membro => {
         membro.send(mensagem).catch(() => {});
    })
}catch(err){

    return message.reply("**:chegay: *\`Ocorreu um erro ao enviar a mensagem. Tente novamente.\`\*").then(msg => msg.delete(8000))

   }
    message.channel.send("*\`Mensagem foi enviada para\`\* ***`" + membros + "`*** *\`Usúarios\`\*").then(msg => msg.delete(8000))
    message.channel.send("**`Mensagem a ser enviada:`\n**" + mensagem).then(msg => msg.delete(8000))
}*/

module.exports.help = {
    name: "aviso",
    aliases: ["avisar"]
}