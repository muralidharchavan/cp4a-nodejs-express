const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Codewind CP4A in weather-app namespace!");
});
 
module.exports.app = app;
