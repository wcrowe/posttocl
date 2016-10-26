var x = require('casper').selectXPath;
var casper = require('casper').create({
  verbose: true,
  logLevel: "debug",
  pageSettings: {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11"
  }
});



casper.options.viewportSize = {width: 1920, height: 988};




casper.start('http://casperjs.org/', function() {
    this.echo(this.getTitle());
});

casper.run(function(){
	this.echo('The run is done.');
	this.exit();
});

