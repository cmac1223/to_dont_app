var express         = require('express');
//var app             = express();
var hbs             = require('hbs');
var express         = require('express');
var path            = require('path');
var port            = process.env.PORT || 3000;

//var todontsController = require('./controllers/todonts_controller.js');
//var bodyParser        = require('body-parser');
var methodOverride   = require('method-override');
var app              = express();

//app.set('view engine', 'hbs');
var todontsController = require('./controllers/todonts_controller.js');
var bodyParser        = require('body-parser');
var methodOverride    = require('method-override');




app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));

app.use('/todonts', todontsController);

app.get('/', function(req,res) {
  //res.send('This is our Home Page'); 
  res.render('welcome');
});

app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todonts on port', port,"//", new Date());
});