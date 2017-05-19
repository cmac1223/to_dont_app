var express = require('express');
var router  = express.Router();
var data    = require('../data.js');

/* INDEX TODONTS */
router.get('/', function(req, res) {
  
  res.render('todonts/index', {
   todonts: data.seededToDonts
  });

});

/* CREATE TODONTS */
router.post('/', function(req, res){
  var newTodonts = {
        description: req.body.description,
        location:    req.body.location,
        urgent:      req.body.urgent
    };
    data.seededToDonts.push(newTodonts);
    res.redirect('/todonts');
}); 

/* NEW TODONTS */
router.get('/new', function(req, res){
  res.render('todonts/new');
});

/* SHOW TODONTS */
router.get('/:id', function(req, res) {
  var todonts = data.seededToDonts[req.params.id];

  res.render('todonts/show', {
    todonts: todonts
  });

});

//EDIT TODO
router.get('/:id/edit', function(req, res){

  res.render('todonts/edit',{
    todonts: {
      description: data.seededToDonts[req.params.id].description,
      location:    data.seededToDonts[req.params.id].location,
      id:          req.params.id  
    }
  });
});


// Update
router.put('/:id', function(req, res) {
  var todontsToEdit         = data.seededToDonts[req.params.id];
  todontsToEdit.description = req.body.description;
  todontsToEdit.location    = req.body.location;
  //todoToEdit.urgent      = req.body.urgent;
  res.redirect('/todonts');
})
//DELETE
router.delete('/:id', function(req, res) {
  data.seededToDonts.splice(req.params.id, 1);
  res.redirect('/todonts');
});


 
module.exports = router;