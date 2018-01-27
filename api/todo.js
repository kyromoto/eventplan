var express = require('express');

var db = require('../db/index.js');

var router  = express.Router();

var info = (request) => {
  console.log(request.method + ":" + request.originalUrl);
}

router.get('/', (req, res) => {
  info(req);
  var data = db.get('todos').sortBy('todo').value();
  //console.log(data);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

router.post('/', (req, res) => {
  info(req);
  var data = req.body;
  var result = db.get('todos').insert(data).write();
  var resultLength = result.length;
  var resultAsString = JSON.stringify(result);

  console.log(result);
  console.log("result array length: " + resultLength);

  if (typeof result != "undefined") {
    console.log("created " + resultAsString);
    res.status(200).send(resultAsString);
  } else {
    res.status(404).send(resultAsString);
  }
});

router.delete('/:id', (req, res) => {
  info(req);
  var id = req.params.id;
  var result = db.get('todos').remove({'id' : id}).write();
  var resultLength = result.length;
  var resultAsString = JSON.stringify(result);

  console.log(result);
  console.log("result array length: " + resultLength);

  if (resultLength > 0) {
    console.log("deleted " + resultAsString);
    res.status(200).send(resultAsString);
  } else {
    console.log("Id not found: " + id);
    res.status(404).send();
  }

});

module.exports = router;
