const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/internship_app'));

/*app.get('/', (req, res) =>
    res.sendFile('index.html', {root: 'dist/internship_app/'}),
);*/

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081)
/*
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));
*/
