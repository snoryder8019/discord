require('dotenv').config()

const Discord =require('discord.js')
const client = new Discord.Client()
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const timQuotes= [
"this is a reminder that Tim will talk. He will talk alot. I am the tim bot",
"once tim ate, he got full",
"tim is from oklahoma, if you didnt know that, dont worry, he'll tell you",
"just a random reminder to love tim.... LOVE HIM!!!!! , this is the tim bot",
"tim's birthday is in April, he was born on the same day as Saddam Hussen",
"if tim falls in the woods, does he make an insult towards your rocket laegue play?",
"Pogonophobia is the fear of beards, that's funny because charlie blackmon hits bombs on tim",
"wait.....did you hear that? tim just got a bit older"

]
client.on('ready', () =>{
console.log('scotts bot is working')
})
client.on('message', async (message)=>{
 let msg = message.content
  if(msg.includes('tim')===true && message.author.bot === false){
       await message.channel.send(timQuotes[random(0,timQuotes.length)])

  }
  
})


 
client.login(process.env.d_token)