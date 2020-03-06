const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    try {
let replies = ['pedra', 'papel', 'tesoura'];
        let result = Math.floor((Math.random() * replies.length));

        let uReply = args[0];
        if (!uReply) return message.channel.send(`Por favor, jogue com uma destas respostas: \`${replies.join(', ')}\``);
        if (!replies.includes(uReply)) return message.channel.send(`Somente essas respostas são aceitas: \`${replies.join(', ')}\``);

        if (replies[result] === uReply) {
            console.log(replies[result]);
            return message.channel.send('É um empate!\' Tivemos a mesma escolha.');
        } else if (uReply === 'pedra') {
            console.log(replies[result]);
            if (replies[result] === 'papel') return message.channel.send('Eu venci!');
            else return message.channel.send('Você ganhou!');
        } else if (uReply === 'tesoura') {
            console.log(replies[result]);
            if (replies[result] === 'pedra') return message.channel.send('Eu venci!');
            else return message.channel.send('Você ganhou!');
        } else if (uReply === 'papel') {
            console.log(replies[result]);
            if (replies[result] === 'tesoura') return message.channel.send('Eu venci!');
            else return message.channel.send('Você ganhou!');
        }

    } catch(e) {
        return message.channel.send(`<a:emoji_30:675686441459646505> | Um Erro Foi Descorberto!\nErro:\n${e}`)
     }
}

module.exports.help = {
    name: "rps",
    aliases: []
}