const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
let bicon = bot.user.displayAvatarURL();
let donateEmb = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Eu preciso da sua ajuda!")
.setDescription("Eu quero continuar a ser incrível, mas eu preciso de dinheiro para me ajudar a ficar online!")
.addField(`Gastos`, `Para me manter online, é necessário gastar mais de **R$40 todos os meses...** e isto sem contar outros gastos usados para investir em novidades incríveis para que você possa usar!`)
.addField(`Doar`, `Se você quer que eu continue online, então por favor, do fundo do meu coração... **doe**, não importa se você irá doar apenas R$1, toda doação é bem-vinda e, é claro, você será uma pessoa maravilhosa.`)
.addField(`Mercado Pago`, `[Aqui](https://mpago.la/16isy3)`)
//.addField(`PayPal`, )
.setFooter("Ah, e é claro: Doar é opcional, então não se sinta mal se você não puder doar!")
.setThumbnail(bicon)

message.channel.send(donateEmb)

message.delete();

}

module.exports.help = {
  name: "doar",
  aliases: ["donate"]
}