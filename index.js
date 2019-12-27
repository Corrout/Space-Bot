const Discord = require('discord.js');
const {prefix, token}= require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
})

client.on('message', message => {
    if(message.content.startsWith(`${prefix}wooloo`)) {
    message.channel.send("Wooloo Is My Boi https://cdn.discordapp.com/attachments/605088199148044299/638823229489676308/woooolloooooo.gif")
    }})

client.on('message', message => {
    
        if(message.content.startsWith(`${prefix}hi`)) {
    
            let member = message.mentions.members.first()
            message.channel.send(`Hello :slight_smile:`) 
        }})
    
client.on('message', message => {
    
        if (message.content === `${prefix}server`) {
             message.channel.send(`This server's name is: ${message.guild.name}`);
        }})
           
client.on('message', message => {

                if (message.content === `${prefix}help`) {
                    message.channel.send(`List Of Commands: +wooloo, +hi, +server, +google, +mydiscordserver, +info, +reddit, +rickroll, +corrinhi `);
                }})

client.on('message', message => {

                if (message.content === `${prefix}google`) {
                    message.channel.send(`Google: https://www.google.com.au/ or https://www.google.com/ `);
                }}) 
                
client.on('message', message => {

                if (message.content === `${prefix}mydiscordserver`) {
                    message.channel.send(`SpaceBot's Discord Server: https://discord.gg/9yq5StD `)
                }}) 

client.on('message', message => {

                if (message.content === `${prefix}info`) {
                    message.channel.send(`Spacebot is a bot for server that Space (Corrin) likes. This Bot Was Made By SpaceMars8 (Corrin #9659).`)
                }}) 
    

client.on('message', message => {

                if (message.content === `${prefix}reddit`) {
                    message.channel.send(`Reddit: https://reddit.com/ Follow The Creator: https://www.reddit.com/user/SpaceMars8 `)
                }}) 
    
client.on('message', message => {

                if (message.content === `${prefix}rickroll`) {
                    message.channel.send(`https://www.youtube.com/watch?v=dQw4w9WgXcQ   `)
                }}) 
client.on('message', message => {

                 if (message.content === `${prefix}corrinhi`) {
                     message.channel.send(`https://media.discordapp.net/attachments/605095278130888811/605095330626928650/dragon_high_five_by_raydango_dd5mlly.png?width=919&height=670  `)
                    }}) 
    
                
client.login(token)
