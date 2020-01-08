const city = require('./city.list.json');
// city = city.lower();
// console.log(city);

let cityArr = [];
function findC(city_name){
 return new Promise((resolve,reject)=>{
     cityArr = [];


    for(let  i = 0 ; i < city.length  ; i++){

        if(city_name == city[i].name){
            cityArr.push({
                name :  city[i].name,
                id : city[i].id,
               });
            

           
         }
      
    
    }


    if(cityArr.length > 0){
        console.log("Match Found: " + cityArr.length);
        setTimeout(() => {

        
         resolve(cityArr);
     
 }, 0);
    }else{
        reject(new Error("We are fucked up!!!"));
    
    }


 })

}

function findCity(cityName){

    findC(cityName).then((cityArr)=>{
   
    //   console.log(cityArr)
        console.log("<---- End ---->");
    
    }).catch((err)=>{
        console.error(err)
    })
    
return cityArr;
}

// findCity("delhi");


module.exports = {
    findCity,
}
