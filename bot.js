const express = require('express')
const app = express()
require('dotenv').config()
const Discord =require('discord.js')
const client = new Discord.Client()
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const quotes = require('./config/quotes')
const sp = require('./routes/shawnPoints')
const request = require('request')
const { Session } = require('inspector')
const { channel } = require('diagnostics_channel')
//app.use(quoteRouter)

client.on('ready', () =>{
console.log('scotts bot is working')
})
client.on('message', async (message)=>{
 let msg = message.content.toLowerCase()
  if(msg.includes('hero')===true && message.author.bot === false){
       await message.channel.send(quotes.heroQuotes[random(0,quotes.heroQuotes.length-1)]+ " "+  quotes.hbot[random(0,quotes.hbot.length)] )
  }
//   if(msg.includes("tim")===true && message.author.bot === false){
//      await message.channel.send(quotes.timQuotes[random(0,quotes.tbot.length)]+ " " + quotes.tbot[random(0,quotes.tbot.length)])
// }
  if(msg.includes('snag')===true && message.author.bot === false){
     await message.channel.send(quotes.bQuotes[random(0,quotes.bbot.length)]+ " " + quotes.bbot[random(0,quotes.bbot.length)])
}
  if(msg.includes('bot version')===true && message.author.bot === false){
     await message.channel.send('bih Bot v0.0.5')
}
if(msg.includes('hello bot')===true && message.author.bot === false){
     await message.channel.send('hi there, would you like to know what I can do? type in #commands')
}
if(msg.includes('#badbot')===true && message.author.bot === false){
     await message.channel.send('Chill, Im fuckin trying over here!!')
}
if(msg.includes('#goodbot')===true && message.author.bot === false){
     await message.channel.send('Nice!!! You wanna head over to my place later?')
}
if(msg.includes('#commands')===true && message.author.bot === false){
     await message.channel.send('I can do a limited number of things right now: \n...\nI listen to keywords like:\n"hello bot"\n"bot version"\n...\nI fire a response when I hear:\n "tim","snag",and "hero"\n...\n try using a command with a hastag\n "#goodbot","#badbot", or"#sp"\n...\nMore to come!!')
}
if (message.content=='#sp'){
     message.channel.send('Accessing Shawn Points \n...Type "@" and find the player to assign Shawn Points')
     .then(() => {
       message.channel.awaitMessages(response => response.content, {
         max: 1,
         time: 30000,
         errors: ['time'],
       })
       .then(collected => {
         const named = collected.first().content;
         const name = named.replace(/|@<>|/g,'')
     
        //console.log(playerExists)
        console.log(name)
        console.log(named)
       })
//sp.postFromDiscord(data)

           });
      
       };
   

if (message.content.includes('#playthegame')) {
  message.channel.send('I would like to play a game \n...Please type "@" and return your username from the dropdown menu')
  .then(() => {
    message.channel.awaitMessages(response => response.content, {
      max: 1,
      time: 30000,
      errors: ['time'],
    })
    .then(collected => {
      const returnRes = collected.first().content;
     const username = returnRes.replace(/|@<>|/,'')
      if(username.includes(message.author)){
      message.channel.send(`Hi ${username}Check You Inbox`).then(()=>{
        message.author.send(`hi ${username} would you like to register to play Shawn Points? type "#confirmsp"`)
      })
      }else{
        message.channel.send(`You are not who you say you are`)
return
      }
   console.log(message.author.id)
   console.log(username)
        });
      });
    };
    
    
    if (message.content =='#confirmsp') {
      await message.channel.send('thank you for registering to play Shawn Points. We will begin the game when enough players are signed up')
      const data = {
        'id':message.author.id,
        'username':message.author.username,
        'spOptin':true,
        'shawnpoints':0
      }
      sp.confirmuser(data)
      //console.log(response)
      sp.postFromDiscord(data)
      //console.log(message.author)
    };
  })

client.login(process.env.d_token)