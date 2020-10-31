const express = require('express');

const app = express();

// Example way to prevent commits via husky
//  var tmp;

app.get('/', (req, res) => {
  res.send('An alligator approaches!');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));
