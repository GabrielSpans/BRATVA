const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const discloud = require("discloud-status");
const cpuStat = require("cpu-stat");

module.exports.run = async (client, message, args) => {

  let r = discloud.ram();  
  const duration = moment.duration(client.uptime).format(" D [dias], H [horas], m [minutos], s [segundos]");

  cpuStat.usagePercent(function(err, percent) {
    if (err) {
      return console.log(err);
    }

  message.channel.send(`= ESTATÍSTICAS B R A T V A=
• Uso da RAM DisCloud  :: ${r}
• Memoria Usada        :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Consumo da CPU       :: ${percent.toFixed(2)}%
• Plataforma           :: linux
• Tempo de atividade   :: ${duration}
• Servidores           :: ${client.guilds.cache.size.toLocaleString()}
• Usúarios             :: ${client.users.cache.size.toLocaleString()}
• Canais               :: ${client.channels.cache.size.toLocaleString()}
• Comandos             :: ${client.commands.size.toLocaleString()}
• Discord.js           :: v${version}
• Node                 :: ${process.version}`, {code: "asciidoc"});

})
};

module.exports.help = {
    name: 'status',
    aliases: ['version', 'stat']
}