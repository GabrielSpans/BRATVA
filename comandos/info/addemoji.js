const download = require('download-file')

module.exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES", false, true, true)) {
    message.channel.send(
      "❌ | Sem permissão."
    );
    return 0;
  }
message.delete();
let info = {filename: "emoji.png"}
let [nome, emojilink] = args
if(!args[0]) return message.channel.send("❌ | Sem Argumentos!");
if(!args[1]) return message.channel.send("❌ | Você Não definiu o link do emoji!");

download(emojilink, info, function(err) {
    if (!err) {
        message.guild.createEmoji('emoji.png', nome)
        .then(emoji => message.channel.send(`✅ | O emoji \`${emoji.name}\` foi adicionado no servidor \`${message.guild.name}\``))
        .catch(console.error);
    } else {
        message.channel.send("❌ | Link invalido")
    }
})
}

module.exports.help = {
    name: "addemoji",
    aliases: []
}