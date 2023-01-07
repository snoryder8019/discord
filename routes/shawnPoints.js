const express = require('express')
const router = express.Router()
const request = require('request')

async function pointRetreiver(data){
    request.get({
        url:'http://localhost:9701/posts/spPoints',
        json:true,
        body:data
    },(err,response,body)=>{
        if(err){
            console.log(err)
        }
        //console.log(response)
    })
}
async function confirmuser(data){
    request.get({
        url:'http://localhost:9701/posts/spConfirm',
        json:true,
        body:data
    },(err,response,body)=>{
        if(err){
            console.log(err)
        }
        console.log(body)
    })
}


async function postFromDiscord(data){
    request.post({
        url:'http://localhost:9701/posts/sps',
        json:true,
        body:data
    },(err,response,body)=>{
        if(err){
            console.log(err)         
        }
        console.log(body)
       // console.log(response)
       
    })
}
module.exports = {postFromDiscord, pointRetreiver, confirmuser}

