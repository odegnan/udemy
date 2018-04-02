const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there buddy!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//HEROKU app
//https://agile-mesa-61866.herokuapp.com/ | https://git.heroku.com/agile-mesa-61866.git
