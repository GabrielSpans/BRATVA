const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR") || !message.guild.owner) return message.channel.send("Você não tem permissão para criar um servidor!")

    message.guild.createChannel('Inicio', { type: 'category' })
    .then()
    .catch(console.error)

    message.guild.createChannel('Staff', { type: 'category' })
    .then()
    .catch(console.error)

    message.guild.createChannel('Geral', { type: 'category' })
    .then()
    .catch(console.error)

    message.guild.createChannel('Voz', { type: 'category' })
    .then()
    .catch(console.error)
    //categorias

    message.guild.createChannel("Bem-vindo!", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Inicio" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);


message.guild.createChannel("Tchau", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Inicio" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);


message.guild.createChannel("Regras!", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Inicio" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);


message.guild.createChannel("Anuncios!", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Inicio" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);


message.guild.createChannel("Bate-papo", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Geral" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);


message.guild.createChannel("Denuncia e sugestões", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Geral" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);
    

message.guild.createChannel("Memes", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Geral" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);
    

message.guild.createChannel("Comandos", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Geral" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);
   

message.guild.createChannel("Chat-staff", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Staff" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);


message.guild.createChannel("logs", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Staff" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);
   

message.guild.createChannel("Geral", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Voz" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);
    

message.guild.createChannel("Suporte", "text")
.then(channel => {
  let category = message.guild.channels.find(c => c.name == "Voz" && c.type == "category");
  channel.setParent(category.id);
}).catch(console.error);
    

    message.guild.createRole({
        data: {
          name: 'Dono',
          color: "RANDOM",
          hoist: true,
          mentionable: false,
        },
      });

      message.guild.createRole({
        data: {
          name: 'Administrador',
          color: "RANDOM",
          hoist: true,
          mentionable: false,
        },
      });

      message.guild.createRole({
        data: {
          name: 'Ajudante',
          color: "RANDOM",
          hoist: true,
          mentionable: false,
        },
      });

      message.guild.createRole({
        data: {
          name: 'Bots',
          color: "RANDOM",
          hoist: true,
          mentionable: false,
        },
      });

      message.guild.createRole({
        data: {
          name: 'Membros',
          color: "RANDOM",
          hoist: true,
          mentionable: false,
        },
      });
    message.channel.send("O servidor foi criado com sucesso!")


}

module.exports.help = {
    name: "servidor",
    aliases: ["server", "server-create", "create-server", "criar-servidor"]
}