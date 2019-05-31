const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
})

client.login("NTg0MDU2NjE0NzE0MjEyMzkx.XPFbyg.V1f6CrMPF0ia6hpRNMonGp1MKEE")
