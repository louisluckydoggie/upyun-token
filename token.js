var crypto = require('crypto');
var md5 = crypto.createHash('md5');

var token = function (key , path){
	var timestamp = Date.parse(new Date()) + 6000;

	var md5_string = key + '&' + timestamp + '&' + path;

	var token_md5 = md5.update(md5_string).digest('hex');
    
    token_md5 = token_md5.substr(12,8);

    var token_value = token_md5 + timestamp;

	return token_value;
	
};

if (require.main === module) {
  var key = process.argv[2];
  var path = process.argv[3];
  console.log('token is ' + token(key , path));
}