const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody CP4A!");
});
 
module.exports.app = app;
