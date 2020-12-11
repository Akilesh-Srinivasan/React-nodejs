const express = require('express');
// require is similar to import statement

// app object represents the route handler with get http request
// res.send will send out the json data
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'thereeee'});
});
//instructs node to listen to port 5000
// environemnt variable has PORT or use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0");