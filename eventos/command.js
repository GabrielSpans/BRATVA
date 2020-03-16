const { readdirSync } = require("fs");
const index = require("../index")
const ascii = require("ascii-table");
const db = require('quick.db')
const Discord = require('discord.js')

// Create a new Ascii table
let table = new ascii("Comandos Logs");
table.setHeading("Comandos", "Status");

//const Client = new Discord.Client()

module.exports = async (client) => {

    
    
    readdirSync("./comandos/").forEach(dir => {

        const commands = readdirSync(`./comandos/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`../comandos/${dir}/${file}`);
            if (pull.help.name) {
                client.commands.set(pull.help.name, pull);
                table.addRow(file, '✅');
            } else if (pull.help.aliases) {
                    client.commands.set(pull.help.aliases, pull);
            } else {
                table.addRow(file, `❌  -> O arquivo não tem module.exports.help para funcionar`);
                continue;
            }

            if (pull.help.aliases && Array.isArray(pull.help.aliases)) pull.help.aliases.forEach(alias => client.aliases.set(alias, pull.help.name));
        }
        //db.add(`comando_${client.user.id}`, 1)
    })
    console.log(table.toString());

}