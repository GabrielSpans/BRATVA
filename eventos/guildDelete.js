module.exports = (client, guild) => {

    console.log(`Eu fui removido de um servidor!
  ID: ${guild.id}
  Nome: ${guild.name}
  Dono: ${guild.owner.user.tag} (${guild.owner.id})
  Membros: ${guild.members.size}
  Agora estou em: ${client.guilds.size} Servidores!`);

  
  client.channels.get('656308543858802698').send(`Eu fui removido de um servidor!
  ID: ${guild.id}
  Nome: ${guild.name}
  Dono: ${guild.owner.user.tag} (${guild.owner.id})
  Membros: ${guild.members.size}
  Agora estou em: ${client.guilds.size} Servidores!`);
  client.user.setActivity(`${client.guilds.size} servidores.`);
  
}