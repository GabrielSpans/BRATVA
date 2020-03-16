const Discord = require("discord.js");
const Enmap = require("enmap");
const client = new Discord.Client({disableEveryone: true, fetchAllMembers: true});
const config = require('./config.json')
const fs = require('fs');
const { contadorComandos } = require("./eventos/command")
const firebase = require("firebase")

const low = require("lowdb")
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)


const moment = require("moment")
moment.locale("pt-BR")


var firebaseConfig = {
  apiKey: "AIzaSyBEiBwf7tbYOjtghAp0VF-mRDxF7_-O_k4",
  authDomain: "bratva-cfed9.firebaseapp.com",
  databaseURL: "https://bratva-cfed9.firebaseio.com",
  projectId: "bratva-cfed9",
  storageBucket: "bratva-cfed9.appspot.com",
  messagingSenderId: "533193053795",
  appId: "1:533193053795:web:f52021bf7bc119b0330a56",
  measurementId: "G-GSDN2YWGDG"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();


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
    const invite = guildInvites.cache.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.cache.get(invite.inviter.id);
    const logChannel = member.guild.channels.cache.find(channel => channel.name === "👮│staff-log");
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${member.user.tag} | Bem-Vindo(a)!`, member.user.displayAvatarURL())
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