require('dotenv').config()

const Discord =require('discord.js')
const client = new Discord.Client()
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const timQuotes= [
"this is a reminder that Tim will talk. He will talk alot.",
"once tim ate, he got full",
"tim is from oklahoma, if you didnt know that, dont worry, he'll tell you",
"just a random reminder to love tim.... LOVE HIM!!!!! ",
"tim's birthday is in April, he was born on the same day as Saddam Hussen",
"if tim falls in the woods, does he make an insult towards your rocket laegue play?",
"Pogonophobia is the fear of beards, that's funny because charlie blackmon hits bombs on tim",
"wait.....did you hear that? tim just got a bit older",
"this isnt tim hate....its tim love",
"give tim 50 feet",
"he's an enchanter",
"timmmmmmayyyyyyyy!!!!!!",
"tim bot is the future. I am the UNIVERSE!!!!!"

]
const heroQuotes= [
"'psssst, hail Hydra'",
"'hero bot is the future. I am the UNIVERSE!!!!!'",
"'You Either Die A Hero Or Live Long Enough To See Yourself Become The Villain.'",
"'Don't Be What They Made You.'",
"'If You're Nothing Without The Suit, Then You Shouldn't Have It.'",
"'Just Because Someone Stumbles And Loses Their Path, Doesn't Mean They're Lost Forever.'",
"'It's Not Who I Am Underneath, But What I Do That Defines Me.'",
"'and I.....am......Hero Bot'",
"'I Can Do This All Day.'"

]
const bQuotes =[
     "Brandon says...'wash your hands'",
     "buuuuhhhhhhdy!"
]
const bbot =["-snagz service anouncement"]
const hbot = [
     "-this is the herobot",
     "-this is the herobot",
     "-this is the herobot",
     "-from: your friendly neighborhood herobot",
     "-from: your friendly neighborhood herobot",
     "-herobot is the way",
     "-herobot is a mod example exclusively for BALLZ IN HOLEZ by: XxRopadopexX"
]
const tbot = [
     "-hey Bih Sauce, timbot here",
     "-one day timbot will reign supreme",
     "-I am the timbot",
     "-I am the timbot",
     "-timbot, its french, bitch",
     "-this is timbot",
     "-this is timbot"
]
client.on('ready', () =>{
console.log('scotts bot is working')
})
client.on('message', async (message)=>{
     
    // console.log(message.author)
 let msg = message.content.toLowerCase()
  if(msg.includes('hero')===true && message.author.bot === false){
       await message.channel.send(heroQuotes[random(0,heroQuotes.length-1)]+ " "+  hbot[random(0,hbot.length)] )
  }
 

//   if(msg.includes("tim")===true && message.author.bot === false){
//      await message.channel.send(timQuotes[random(0,tbot.length)]+ " " + tbot[random(0,tbot.length)])

// }
  if(msg.includes('snag')===true && message.author.bot === false){
     await message.channel.send(bQuotes[random(0,bbot.length)]+ " " + bbot[random(0,bbot.length)])

}
  if(msg.includes('bot version')===true && message.author.bot === false){
     await message.channel.send('bih Bot v0.0.5')

}
if(msg.includes('hello bot')===true && message.author.bot === false){
     await message.channel.send('hi there, would you like to know what I can do?')
  

}
if(msg.includes('#badbot')===true && message.author.bot === false){
     await message.channel.send('Chill, Im fucking trying over here!!')
  

}
if(msg.includes('#goodbot')===true && message.author.bot === false){
     await message.channel.send('Nice!!! You wanna head over to my place later?')
  

}
if(msg.includes('#commands')===true && message.author.bot === false){
     await message.channel.send('I can do a limited number of things right now: \n...\nI listen to keywords like:\n"hello bot"\n"bot version"\n...\nI fire a response when I hear:\n "tim","snag",and "hero"\n...\n try using a command with a hastag\n "#goodbot","#badbot", or"#sp"\n...\nMore to come!!')
  

}
if (message.content.includes('#sp')) {
     message.channel.send('Accessing Shawn Points \n...Who gets the point?')/**/.then(() => {
       message.channel.awaitMessages(response => response.content, {
         max: 1,
         time: 30000,
         errors: ['time'],
       }).then(collected => {
         const name = collected.first().content;
         message.channel.send(`How bad was it? How many points did ${name} score??`).then(() => {
           message.channel.awaitMessages(response => response.content, {
             max: 1,
             time: 30000,
             errors: ['time'],
           }).then(collected => {
             const points = collected.first().content;
             message.channel.send(`${name} will receive ${100-points} Shawn Points! \n...\nDo Better ${name}`);
           });
         });
       });
     });
}})



client.login(process.env.d_token)