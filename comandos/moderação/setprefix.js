const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return message.channel.send(`${message.author} você não possui permissão para usar esse comando.`)
        
      }

      if(!args[0]) return message.channel.send(`DIGA UM PREFIXO`)


      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("PREFIXO ALTERADO COM SUCESSO")
  .setDescription(`Prefixo Alterado para: ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
    name: 'setprefix',
    aliases: ["set-prefix", "prefixo", 'prefix']
}