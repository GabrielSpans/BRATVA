const { readdirSync } = require("fs");

const ascii = require("ascii-table");

// Create a new Ascii table
let table = new ascii("Comandos Logs");
table.setHeading("Comandos", "Status");

module.exports = (client) => {
    // Read every commands subfolder
    readdirSync("./comandos/").forEach(dir => {
        // Filter so we only have .js command files
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
    })
    console.log(table.toString());
}