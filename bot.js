const Discord = require('discord.js');
const {prefix, token}= require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
})

client.on('message', message => {
    if(message.content.startsWith(`${prefix}wooloo`)) {
    message.channel.send("Wooloo Is My Boi")
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

         if (message.content === `${prefix}goldmaker`) {
             message.channel.send(`GoldMaker's YouTube Channel: https://www.youtube.com/channel/UCVU0uGAnC2WsvlAyZBTddnw`);
         }})

 client.on('message', message => {

            if (message.content === `${prefix}thatcooltorchic`) {
                message.channel.send(`ThatCoolTorchic's YouTube Channel: https://www.youtube.com/channel/UCr3RjG0G1aKOH_5fA7PahPQ `);
            }})

client.on('message', message => {

            if (message.content === `${prefix}bingleberry`) {
                message.channel.send(`bingle berry's YouTube Channel: https://www.youtube.com/channel/UCzSWcyRZRrtZzWKV7tQka8A `);
            }})
    
client.on('message', message => {

            if (message.content === `${prefix}xandoofi`) {
                message.channel.send(`Xandoofi's YouTube Channel: https://www.youtube.com/channel/UCeNlDzx6AeIabJ5i5M3yyIQ `);
            }})

client.on('message', message => {

            if (message.content === `${prefix}anoverratedmon`) {
                message.channel.send(`AnOverratedMons's YouTube Channel: https://www.youtube.com/channel/UCiT5eWDCyWKaRKnnDZlE9UA `);
            }})
    
client.on('message', message => {

                if (message.content === `${prefix}halfninja`) {
                    message.channel.send(`Half Ninja's YouTube Channel:https://www.youtube.com/channel/UCwOdtXkGgm5wkFqwZuRP2RQ  `);
                }})
            
client.on('message', message => {

                if (message.content === `${prefix}help`) {
                    message.channel.send(`List Of Commands: +wooloo, +hi, +server, +goldmaker, +thatcooltorchic, +bingleberry, +xandoofi, +anoverratedmon, +halfninja, +google, +mydiscordserver, +info, +reddit, +rickroll `);
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
                    message.channel.send(`Spacebot Is A Bot For Servers Like YTLimbo And More Like Them. This Bot Was Made By SpaceMars8 (Corrin #2594).`)
                }}) 
    

client.on('message', message => {

                if (message.content === `${prefix}reddit`) {
                    message.channel.send(`Reddit: https://reddit.com/ Follow The Creator: https://www.reddit.com/user/SpaceMars8 `)
                }}) 
    
client.on('message', message => {

                if (message.content === `${prefix}rickroll`) {
                    message.channel.send(`https://www.youtube.com/watch?v=dQw4w9WgXcQ   `)
                }}) 
                 
client.login(process.env.BOT_TOKEN)
