const { response } = require('express');
const express = require('express');
const https = require('https');

const app = express();

app.get("/", (req, res)=>{

  const url= "https://api.openweathermap.org/data/2.5/weather?q=Bhubaneshwar&appid=e02502865e18d2e98d6fb89b70a6de7c&units=metricapi.openweathermap.org/data/2.5/weather?q=Ranchi&appid=e02502865e18d2e98d6fb89b70a6de7c&units=metric"
  https.get(url , (res2)=>{ 
  console.log(res2);
  console.log("Your Status Message : "+res2.statusMessage);
  res2.on("data",(data)=>{
    console.log(data);
  });
  });

  res.send('Server is up and running');
});
// after writing the code we need to run the server. 
//1. go to Hyper terminal 
//2. type node app.js 
//3. press enter 
//4. go to browser and type localhost:3000
app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
});


