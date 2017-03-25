var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Node~~~!!!'});
});


router.get('/chat', function(req, res) {
    res.render('chat', {io_url : req.protocol+"://"+req.get('host')});
});

module.exports = router;
