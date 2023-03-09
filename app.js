const express = require('express');
const https = require('https');

const app = express();

app.get("/", (req, res)=>{

  const url= "https://api.openweathermap.org/data/2.5/weather?q=Bhubaneshwar&appid=e02502865e18d2e98d6fb89b70a6de7c&units=metricapi.openweathermap.org/data/2.5/weather?q=Ranchi&appid=e02502865e18d2e98d6fb89b70a6de7c&units=metric"
  https.get(url , (res2)=>{ 
  console.log(res2);
  });

  res.send('Server is up and running');
});

app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
});
