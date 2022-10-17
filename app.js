const express = require('express');
const app = express();

const PORT = 3000;

app.get('/makers/:name?', (req, res) => {

  const { params: { name } } = req;
  let finalName = '', msgResponse='';

  if(name){
    finalName = [name[0].toUpperCase(), name.substring(1, name.length)].join('');
    msgResponse = ['<h1>Hola ', finalName, '!</h1>'].join('');
    res.status(202).send(msgResponse);
   } else {
     finalName = 'Desconocido';
     msgResponse = ['<h1>Hola ', finalName, '!</h1>'].join('');
     res.status(404).send(msgResponse);
  }

});

app.listen(PORT, () => console.log('Listening on port 3000!'));

