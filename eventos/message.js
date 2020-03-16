const config = require("../config.json");
const fs = require('fs')
const ms = require('ms')
const db = require('quick.db')

var cooldown = new Set()
const map = new Map();

module.exports = (client, message) => {
   
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

  
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;

    if(!message.content.startsWith(prefix)) return;

    //if(message.content.startsWith(`<@${message.bot.id}>` || `<@!${message.bot.id}>`)) return message.channel.send(`testando`)
    
    let opts = {
      dev:'292708406278619136',
      map:map
   }

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    let user = db.get(`blacklist_${message.author.id}`);
    if(user == true) return message.channel.send(`<@${message.author.id}> | Você foi banido de usar meus comandos!`)
  
    if (cooldown.has(message.author.id)) 
    return message.reply("Espere 3 segundos para usar outro comando!").then(m => m.delete(1000))
    else cooldown.add(message.author.id)
 
    /*if (client.commands.get(cmd)) {
      commandfile = client.commands.get(cmd);
  } else if (client.aliases.has(cmd)) {
    commandfile = client.commands.get(client.aliases.get(cmd));
  } //else message.channel.send(`❌ | Esse comando não existe, verifique a ortografia e tente novamente`).then(m => m.delete(1000))*/
          
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));


  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, 3000)

  if (command)
  command.run(client, message, args, opts, database);
  /*try {
    commandfile.run(client, message, args, prefix);
  
  } catch (e) {
  }*/

}