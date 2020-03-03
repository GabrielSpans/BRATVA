const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const db = require('quick.db')
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.run = async (client, message, args) => {


  if(!message.member.hasPermission("BAN_MEMBERS") || !message.guild.owner) return message.channel.send("Você não tem permissão")
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!wUser) return message.reply("Mencione um usuario!");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Vai de beise");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
      });
      if(warns[wUser.id].warns == 1){
      let warnEmbed = new Discord.RichEmbed()
      .setTitle("WARN")
      .setAuthor(message.author.username)
      .setColor("RANDOM")
      .setImage("http://1.bp.blogspot.com/-WMforG0sFvo/VaFKsvFinfI/AAAAAAAAQa0/dZpdkIEKoxU/s1600/MACHISTAS%2BNAO%2BPASSARAO.JPG")
      .addField("Warned User", wUser.id)
      .addField("Warned em", message.channel)
      .addField("Numero de alertas", warns[wUser.id].warns)
      .addField("Motivo", reason);

      let warnChannel = client.channels.get("659132146786500666").send(warnEmbed);
      }
      
      if(warns[wUser.id].warns == 2){
        let muterole = message.guild.roles.find(`name`, "Muted");
        if(!muterole) return message.reply(" Cria o cargo `mutado` ai mein");

        let mutetime = "10s";
        await(wUser.addRole(muterole.id));
        message.channel.send(`${wUser.tag} está temporariamente Mutado!`);

        setTimeout(function(){
            wUser.removeRole(muterole.id)
            message.channel.reply(`Você foi desmutado`)
        }, ms(mutetime));
      }
      if(warns[wUser.id].warns == 3){
        message.guild.member(wUser).ban(reason);
        message.channel.send(`${wUser.tag} Foi banido por 3 Warns`)
    }

    let onoff = db.get(`modlog.${message.guild.id}.on`)
let channel = db.get(`modlog.${message.guild.id}.channel`)
if (!onoff) return;
if(!channel) return;

if (onoff == true) {
    let logs = message.guild.channels.get(channel)
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.icorURL)
.addField("Moderação", "warn")
.addField("Usúario:", `<@${tomute.id}> (${muterole.id})`)
.addField("Moderador:", message.author.username)
.addField("Motivo:", `${reason}`)
.addField("Data:", message.createdAt)

logs.send(embed)
}
}

module.exports.help = {
  name: "warn",
  aliases: []
}