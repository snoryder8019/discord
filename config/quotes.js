const express = require('express')
const router = express.Router()
const quotes = {
timQuotes: [
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
],
heroQuotes:[
    "'psssst, hail Hydra'",
"'hero bot is the future. I am the UNIVERSE!!!!!'",
"'You Either Die A Hero Or Live Long Enough To See Yourself Become The Villain.'",
"'Don't Be What They Made You.'",
"'If You're Nothing Without The Suit, Then You Shouldn't Have It.'",
"'Just Because Someone Stumbles And Loses Their Path, Doesn't Mean They're Lost Forever.'",
"'It's Not Who I Am Underneath, But What I Do That Defines Me.'",
"'and I.....am......Hero Bot'",
"'I Can Do This All Day.'"
],

bQuotes :[
     "Brandon says...'wash your hands'",
     "buuuuhhhhhhdy!"
],
spQuotes :[
    "How bad was it? "
],
bbot :[
    "-snagz service anouncement"
],
hbot : [
     "-this is the herobot",
     "-this is the herobot",
     "-this is the herobot",
     "-from: your friendly neighborhood herobot",
     "-from: your friendly neighborhood herobot",
     "-herobot is the way",
     "-herobot is a mod example exclusively for BALLZ IN HOLEZ by: XxRopadopexX"
],
tbot : [
     "-hey Bih Sauce, timbot here",
     "-one day timbot will reign supreme",
     "-I am the timbot",
     "-I am the timbot",
     "-timbot, its french, bitch",
     "-this is timbot",
     "-this is timbot"
],
spbot : [
    " ,maybe try a training pack, or something.",
    " ,do better...",
    " ,I'm not mad, I'm just disapointed",
    " ,add me to the list of inanimate objects you've have let down.",
    " ,no one's saying uninstall the game, but hey, you should think about it."
]
}
module.exports = quotes