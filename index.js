var research = require('./research.js')
var output = require('./output.js')

module.exports = exports = function(subject, cb) {
  research(subject, function(err, subject){
    if(err){
      return console.error(err);
    }
    var x = output(subject)
    cb(x)
  });
}
