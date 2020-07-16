const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Codewind CP4A!");
});
 
module.exports.app = app;
