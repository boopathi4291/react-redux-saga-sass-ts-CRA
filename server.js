const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const SourceMapSupport =  require('source-map-support') ;
const port = process.env.PORT || 8080;
const myDataRouter = require("./express-server/router/router")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    express.static(path.join(__dirname, 'build'))
  });

  // add Source Map Support
SourceMapSupport.install();
app.get('/', (req,res) => {
    return res.end('Api working');
  })


// router.get('/getAllRecords', (req, res) => {
//     const records=[{date:"2018-02-10", title: "Celica", amount: 55000},
//     {date:"2018-05-20", title: "Boxter", amount: 35000},
//     {date:"2018-07-12", title: "test", amount: -35000},
//     {date:"2018-02-04", title: "react", amount: 50000}];
//   res.json(records);
// });

app.use('/myData', myDataRouter);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  app.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
  });


