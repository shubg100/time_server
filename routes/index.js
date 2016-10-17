var express = require('express');
var moment = require('moment');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Time Server'});
});

router.get('/:query', function(req, res) {
    var q = req.params.query;
    var unix = null;
    var natural = null;
    
    function toUnix(d) {
        return moment(d, "MMMM D, YYYY").format("X");
    }
    
    function toNatural(d) {
        return moment.unix(Number(d)).format("MMMM D, YYYY");
    }
    
    if(Number(q) >= 0){
        unix = Number(q);
        natural = toNatural(q);
    }
    
    if(isNaN(q) && moment(q, "MMMM D, YYYY").isValid()){
        unix = toUnix(q);
        natural = toNatural(unix);
    }

    var obj = {unix: unix, natural: natural};
    res.json(obj);
});

module.exports = router;
