module.exports = (client, guild) => {

    console.log(`Entrei em um servidor!
  ID: ${guild.id}
  Nome: ${guild.name}
  Dono: ${guild.owner.user.tag} (${guild.owner.id})
  Membros: ${guild.members.size}
  Agora estou em: ${client.guilds.size} Servidores!`);

  
  client.channels.cache.get('656308543858802698').send(`Entrei em um servidor!
  ID: ${guild.id}
  Nome: ${guild.name}
  Dono: ${guild.owner.user.tag} (${guild.owner.id})
  Membros: ${guild.members.size}
  Agora estou em: ${client.guilds.size} Servidores!`);
  client.user.setActivity(`${client.guilds.size} servidores.`);
  
  
}