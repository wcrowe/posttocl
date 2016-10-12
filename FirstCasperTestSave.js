var casper = require('casper').create({
  verbose: true,
  logLevel: "info",
  pageSettings: {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11"
  }
});
casper.options.viewportSize = {width: 1920, height: 988};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('http://tampa.craigslist.org/');
   casper.wait(1400);
   casper.then(function() {
       this.captureSelector("main.png", "html");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='my account']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='my account']"));
           this.click(x("//a[normalize-space(text())='my account']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='my account']"));
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("loginpage.png", "html");
   });
   casper.waitForSelector("input[name='inputEmailHandle']",
       function success() {
           this.sendKeys("input[name='inputEmailHandle']", "crowe.will@gmail.com");
       },
       function fail() {
           test.assertExists("input[name='inputEmailHandle']");
   });
   casper.wait(500);
  casper.waitForSelector("input[name=name='inputPassword']",
    function success() {
           this.sendKeys("input[name='inputPassword']", "Mustang74");
       },i
       function fail() {
           test.assertExists("input[name='inputPassword']");
   });
   casper.waitForSelector("form .accountform.login-box button",
       function success() {
           test.assertExists("form .accountform.login-box button");
           this.click("form .accountform.login-box button");
       },
       function fail() {
           test.assertExists("form .accountform.login-box button");
   });
   casper.wait(700);
   /* submit form */
   casper.waitForSelector(x("//a[normalize-space(text())='home of crowe.will@gmail.com']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='home of crowe.will@gmail.com']"));
           this.click(x("//a[normalize-space(text())='home of crowe.will@gmail.com']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='home of crowe.will@gmail.com']"));
   });
   casper.wait(5000);
   casper.then(function() {
       this.captureSelector("main.png", "html");
   });
 casper.waitForSelector(x("//a[normalize-space(text())='log out']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='log out']"));
           this.click(x("//a[normalize-space(text())='log out']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='log out']"));
   });
   casper.run(function() {test.done();});
});