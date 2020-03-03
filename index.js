const Discord = require("discord.js");
const Enmap = require("enmap");
const client = new Discord.Client({disableEveryone: true, fetchAllMembers: true});
const config = require('./config.json')
const fs = require('fs');

const moment = require("moment")
moment.locale("pt-BR")

client.config = config;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const invites = {};
const wait = require('util').promisify(setTimeout);

fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error(err);
  console.log(`Carregando o total de ${files.length} Eventos.`)
  files.forEach(file => {
    const event = require(`./eventos/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Foi Carregado o Evento ${eventName} ✅`)
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

["command"].forEach(handler => {
  require(`./eventos/${handler}`)(client);
})

client.on('ready', () => {
  wait(1000);
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', async member => {
  if(member.guild.id == "648960474188349440") {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "👮│staff-log");
    let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag} | Bem-Vindo(a)!`, member.user.displayAvatarURL)
    .setColor("RANDOM")
    .addField("Entrou no servidor:", `${member.user.tag}`)
    .addField("Convite:", `https://discord.gg/${invite.code}`)
    .addField("Convite criado por:", `${inviter.tag}`)
    .addField("Usado:", `${invite.uses} vezes`)
    logChannel.send(embed)
  });
}
});

client.login(config.token);