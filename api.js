const route = require('express').Router();
const request = require('request');
const {findCity} = require('./try');

let api = "2c71f065ce3a2d41067e4159e5d964c4"

let city;
let rand = "";
let cityArr = '';
let abc = [];


  
        function calls(city_shit){
            return new Promise((resolve, reject)=>{
                let url  = 'https://api.openweathermap.org/data/2.5/weather?id='+ city_shit + '&appid=' + api;
                console.log(url);
                request.get({
                    url: url,
                    json: true,
                } , (err , res , body)=>{
                    if(!err){
                        resolve(body);
                    }
                })

            })
        }
  


// .temp_min +  " max temp is: " + rand[0].temp_max 

route.post('/' , (req,res)=>{
    if(req.body.city == ''){
        res.send("Enter City Name!!")
    }else{
        city ='';
        city = req.body.city;
    
       async function call(city_name){
           console.log(city_name);
            abc = [];
           abc = await findCity(city_name)
           console.log(abc);
          
       }
       let ava = findCity(req.body.city)
       console.log(ava);
       if(ava.length == 0){
           console.log("We got bad Hit")
           res.send("Invalid City");
       }else{
        call(city).then(()=>{
            calls(abc[0].id).then((some_shit)=>{
                console.log("min temp is: " + some_shit.main.temp_min + " max temp is: " + some_shit.main.temp_max);
                let a = {
                    min: some_shit.main.temp_min,
                    max: some_shit.main.temp_max,
                }
                res.send(a);

            })
        })
       }
    

    
    }
    
   
})



module.exports = route;

// function newFunction(call) {
//     call(city);
// }
