const Discord = require("discord.js")
 
 module.exports.run = async (bot, message, args) => {

   try {
    if(!args[0]) return message.channel.send(`<a:emoji_30:675686441459646505> | Faça Uma Pergunta!`);
    let replies = ["Sim", "Não", "Como eu vou saber?", "Essa é a questão!", "Com certeza não!", "Logico!", "Por favor, não.", "Você ainda pergunta?", "Verdade", "Mentira", "Claro!", ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    message.reply(replies[result])

   } catch(e) {
      return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
   }


 }

 module.exports.help = {
    name:"8ball",
    aliases: ["8b"]
  }