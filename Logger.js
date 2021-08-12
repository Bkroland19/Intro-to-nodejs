var url = "http://mylogger.io/log";

function log(message) {
	//send an http request
}
//making log public
module.exports.log = log;

//making url public
module.exports.url = url;
