const { response } = require('express');
const express = require('express');
const https = require('https');

const app = express();

app.get("/", (req, res)=>{

  const url= "https://api.openweathermap.org/data/2.5/weather?q=Brahmapur&appid=e02502865e18d2e98d6fb89b70a6de7c&units=metricapi.openweathermap.org/data/2.5/weather?q=Ranchi&appid=e02502865e18d2e98d6fb89b70a6de7c&units=metric"
  
  
  https.get(url , (res2)=>{ 
  //console.log(res2);

  console.log("Your Status Message : "+res2.statusMessage);
  
  
  res2.on("data",(data)=>{
    console.log(data);
    
    const weatherData = JSON.parse(data);
    console.log(weatherData);
    const imgURL="https://openweathermap.org/img/w/"+weatherData.weather[0].icon+".png";
    console.log("The temperature in "+weatherData.name+" is "+weatherData.main.temp);
    console.log("The weather is "+weatherData.weather[0].description);
    console.log("The humidity is "+weatherData.main.humidity);
    console.log("The wind speed is "+weatherData.wind.speed);
    console.log("The pressure is "+weatherData.main.pressure);
    res.write("<table><th>The Weather Statistics for "+weatherData.name+" are as follows :- </th><tr><td>The weather is <b>"+weatherData.weather[0].description+"</b></td><td>The humidity is <b>"+weatherData.main.humidity+"</b></td></tr>  <tr><td>The wind speed is <b>"+weatherData.wind.speed+"</b></td><td>The pressure is <b>"+weatherData.main.pressure+"</b></td></tr></table>");
    res.write("<img src="+imgURL+">");
    res.send();
    //res.send("The temperature in "+weatherData.name+" is "+weatherData.main.temp+" The weather is "+weatherData.weather[0].description+" The humidity is "+weatherData.main.humidity+" The wind speed is "+weatherData.wind.speed+" The pressure is "+weatherData.main.pressure+" The pressure is "+weatherData.main.pressure+");
  });

 });

 
});
// after writing the code we need to run the server. 
//1. go to Hyper terminal 
//2. type node app.js 
//3. press enter 
//4. go to browser and type localhost:3000
app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
});


