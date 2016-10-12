function getWaitTime(){
  return Math.floor((Math.random() * 1500) + 500);
}

var casper = require('casper').create({
  verbose: true,
  logLevel: "info",
  pageSettings: {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11"
  }
});


casper.start('https://www.faces2hire.com/');
casper.wait(getWaitTime());
casper.wait(getWaitTime());
casper.wait(getWaitTime());

casper.run();
