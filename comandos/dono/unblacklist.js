const db = require("quick.db");

module.exports.run = async(client, message, args) => {

   if(message.author.id == "292708406278619136") {

        let user = client.users.cache.get(args[0]);
    if(!user) return message.channel.send(`<@${message.author.id}> | de o ID de um usúario para retirar da Blacklist`);

    let fetched = db.get(`blacklist_${user.id}`)

    if(fetched) {
        db.set(`blacklist_${user.id}`, false)
        message.channel.send(`<a:emoji_31:675686482283069480> | O Usuário <@${args[0]}> Foi Retirado da Blacklist e Pode Voltar a Usar Meus Comandos.`);
      }else { 
        return message.channel.send(`<a:emoji_30:675686441459646505> | Esse Usuário Não Esta na Blacklist!`);
      }
    }else{
      return message.channel.send(`<a:emoji_30:675686441459646505> | Você Não é Meu Dono Para Executar Esse Comando!`);
    }

}

  module.exports.help = {
      name: "unblacklist",
      aliases: ["unblack", "unbban"]
  }