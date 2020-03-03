const db = require("quick.db");

module.exports.run = async(client, message, args) => {

   if(message.author.id == "292708406278619136") {

        let user = client.users.cache.get(args[0]);
    if(!user) return message.channel.send(`<@${message.author.id}>`);

    let fetched = db.get(`blacklist_${user.id}`)

    if(fetched) {
        db.set(`blacklist_${user.id}`, false)
        message.channel.send(`O usúario <@${args[0]}> foi desbanido de me usar!`);
      }else { 
        return message.channel.send(`Esse usúario não esta na blacklist`);
      }
    }else{
      return message.channel.send(`No no`);
    }

}

  module.exports.help = {
      name: "unblacklist",
      aliases: ["unblack"]
  }