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
"wait.....did you hear that? tim just got a bit older",
"this isnt tim hate....its tim love, I am the tim bot",
"give tim 50 feet",
"he's an enchanter, This is the tim bot",
"timmmmmmayyyyyyyy!!!!!!",
"tim bot is the future. I am the UNIVERSE!!!!!"

]
const heroQuotes= [
"psssst, hail Hydra",
"hero bot is the future. I am the UNIVERSE!!!!!",
"You Either Die A Hero Or Live Long Enough To See Yourself Become The Villain.",
"Don't Be What They Made You.",
"If You're Nothing Without The Suit, Then You Shouldn't Have It.",,
"Just Because Someone Stumbles And Loses Their Path, Doesn't Mean They're Lost Forever.",
"It's Not Who I Am Underneath, But What I Do That Defines Me.",
"and I.....am......Hero Bot",
"I Can Do This All Day."






]
client.on('ready', () =>{
console.log('scotts bot is working')
})
client.on('message', async (message)=>{
 let msg = message.content
  if(msg.includes('hero')===true && message.author.bot === false){
       await message.channel.send(heroQuotes[random(0,heroQuotes.length)])

  }
  
})


 
client.login(process.env.d_token)