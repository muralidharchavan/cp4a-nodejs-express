const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Codewind CP4A deployed in weather-app project!");
});
 
module.exports.app = app;
