module.exports = function (client, error) {

    let commands = 
    client.channels.get("670013321029746714")
    commands.send(`o WebSocket do cliente encontrou um erro de conexão: ${error}`);
}