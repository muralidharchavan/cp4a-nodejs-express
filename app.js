const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Codewind CP4A in different namespace!");
});
 
module.exports.app = app;
