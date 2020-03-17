const discloud = require("discloud-status");

const invites = {};

const wait = require('util').promisify(setTimeout);



module.exports = (client) => {
  /*let a = client.guilds.map(n => n.name).join(",\n ")   
  console.log(a)*/
  console.log(`[FIREBASE] O Banco de Dados FireBase Foi Logada!`)
        console.log(`${client.user.username} foi iniciado, com ${client.users.cache.size} usuários, em ${client.guilds.cache.size} servidores e com ${client.commands.size} Comandos.`); 

        let statuses = [
          `.help | ${client.guilds.cache.size} Servidores!`,
          `.help | ${client.users.cache.size} Usúarios!`,
          `.help | ${client.commands.size} Comandos!`
        ]

        setInterval(function() {
          let status = statuses[Math.floor(Math.random() * statuses.length)];
          client.user.setActivity(status, {type: "STREAMING"});

        }, 15000)


        /*let servers = 
        client.channels.cache.get("670021025882177537")
        setInterval(async () => {
          servers.cache.setName(`🌎 Servidores » ${client.guilds.size}`)
        }, 3000);
        
        let users = 
        client.channels.cache.get("670020967237419008")
        setInterval(async () => {
          users.cache.setName(`👥 Usuários » ${client.users.size}`)
        }, 3000);

        let commands = 
        client.channels.cache.get("670021051492728913")
        setInterval(async () => {
          commands.cache.setName(`💾 Comandos » ${client.commands.size}`)
        }, 3000);*/
}