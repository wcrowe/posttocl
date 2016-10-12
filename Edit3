Run it on Casperbox
/*==============================================================================*/
/* Casper generated Fri Oct 07 2016 23:31:42 GMT-0400 (Eastern Daylight Time) */
/*==============================================================================*/

var x = require('casper').selectXPath;
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
   casper.waitForSelector(x("//a[normalize-space(text())='my account']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='my account']"));
           this.click(x("//a[normalize-space(text())='my account']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='my account']"));
   });
   casper.waitForSelector("input[name='inputEmailHandle']",
       function success() {
           this.sendKeys("input[name='inputEmailHandle']", "crowe.will@gmail.comMustang74");
       },
       function fail() {
           test.assertExists("input[name='inputEmailHandle']");
   });
   casper.waitForSelector("form .accountform.login-box button",
       function success() {
           test.assertExists("form .accountform.login-box button");
           this.click("form .accountform.login-box button");
       },
       function fail() {
           test.assertExists("form .accountform.login-box button");
   });
   /* submit form */
   casper.waitForSelector(x("//a[normalize-space(text())='home of crowe.will@gmail.com']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='home of crowe.will@gmail.com']"));
           this.click(x("//a[normalize-space(text())='home of crowe.will@gmail.com']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='home of crowe.will@gmail.com']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='post to classifieds']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='post to classifieds']"));
           this.click(x("//a[normalize-space(text())='post to classifieds']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='post to classifieds']"));
   });
   casper.waitForSelector("form input[name='n']",
       function success() {
           test.assertExists("form input[name='n']");
           this.click("form input[name='n']");
       },
       function fail() {
           test.assertExists("form input[name='n']");
   });
   casper.waitForSelector(".posting > .row.fields:nth-child(4) label",
       function success() {
           test.assertExists(".posting > .row.fields:nth-child(4) label");
           this.click(".posting > .row.fields:nth-child(4) label");
       },
       function fail() {
           test.assertExists(".posting > .row.fields:nth-child(4) label");
   });
   casper.waitForSelector("form#postingForm input[name='contact_text_ok']",
       function success() {
           test.assertExists("form#postingForm input[name='contact_text_ok']");
           this.click("form#postingForm input[name='contact_text_ok']");
       },
       function fail() {
           test.assertExists("form#postingForm input[name='contact_text_ok']");
   });
   casper.waitForSelector("input[name='contact_phone']",
       function success() {
           this.sendKeys("input[name='contact_phone']", "813732878");
       },
       function fail() {
           test.assertExists("input[name='contact_phone']");
   });
   casper.waitForSelector("form#postingForm input[name='contact_name']",
       function success() {
           test.assertExists("form#postingForm input[name='contact_name']");
           this.click("form#postingForm input[name='contact_name']");
       },
       function fail() {
           test.assertExists("form#postingForm input[name='contact_name']");
   });
   casper.waitForSelector("input[name='contact_name']",
       function success() {
           this.sendKeys("input[name='contact_name']", "Will");
       },
       function fail() {
           test.assertExists("input[name='contact_name']");
   });
   casper.waitForSelector("input[name='PostingTitle']",
       function success() {
           this.sendKeys("input[name='PostingTitle']", "Pressure Washing");
       },
       function fail() {
           test.assertExists("input[name='PostingTitle']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot1.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot2.png", "html");
   });
   casper.waitForSelector("form#postingForm input[name='postal']",
       function success() {
           test.assertExists("form#postingForm input[name='postal']");
           this.click("form#postingForm input[name='postal']");
       },
       function fail() {
           test.assertExists("form#postingForm input[name='postal']");
   });
   casper.waitForSelector("input[name='postal']",
       function success() {
           this.sendKeys("input[name='postal']", "33611");
       },
       function fail() {
           test.assertExists("input[name='postal']");
   });
   casper.waitForSelector("textarea[name='PostingBody']",
       function success() {
           this.sendKeys("textarea[name='PostingBody']", "Pressure washing.");
       },
       function fail() {
           test.assertExists("textarea[name='PostingBody']");
   });
   casper.waitForSelector("form#postingForm button[type=submit][value='Continue']",
       function success() {
           test.assertExists("form#postingForm button[type=submit][value='Continue']");
           this.click("form#postingForm button[type=submit][value='Continue']");
       },
       function fail() {
           test.assertExists("form#postingForm button[type=submit][value='Continue']");
   });
   /* submit form */
   casper.waitForSelector("form#postingForm input[name='contact_phone']",
       function success() {
           test.assertExists("form#postingForm input[name='contact_phone']");
           this.click("form#postingForm input[name='contact_phone']");
       },
       function fail() {
           test.assertExists("form#postingForm input[name='contact_phone']");
   });
   casper.waitForSelector("input[name='contact_phone']",
       function success() {
           this.sendKeys("input[name='contact_phone']", "58");
       },
       function fail() {
           test.assertExists("input[name='contact_phone']");
   });
   casper.waitForSelector(".posting",
       function success() {
           test.assertExists(".posting");
           this.click(".posting");
       },
       function fail() {
           test.assertExists(".posting");
   });
   casper.waitForSelector("form#postingForm button[type=submit][value='Continue']",
       function success() {
           test.assertExists("form#postingForm button[type=submit][value='Continue']");
           this.click("form#postingForm button[type=submit][value='Continue']");
       },
       function fail() {
           test.assertExists("form#postingForm button[type=submit][value='Continue']");
   });
   /* submit form */
   casper.waitForSelector("form#leafletForm .continue.bigbutton",
       function success() {
           test.assertExists("form#leafletForm .continue.bigbutton");
           this.click("form#leafletForm .continue.bigbutton");
       },
       function fail() {
           test.assertExists("form#leafletForm .continue.bigbutton");
   });
   /* submit form */
   casper.waitForSelector("button#plupload",
       function success() {
           test.assertExists("button#plupload");
           this.click("button#plupload");
       },
       function fail() {
           test.assertExists("button#plupload");
   });
   casper.waitForSelector("form button[type=submit][value='Done with Images']",
       function success() {
           test.assertExists("form button[type=submit][value='Done with Images']");
           this.click("form button[type=submit][value='Done with Images']");
       },
       function fail() {
           test.assertExists("form button[type=submit][value='Done with Images']");
   });
   /* submit form */
   casper.waitForSelector("form#publish_top button[type=submit][value='Continue']",
       function success() {
           test.assertExists("form#publish_top button[type=submit][value='Continue']");
           this.click("form#publish_top button[type=submit][value='Continue']");
       },
       function fail() {
           test.assertExists("form#publish_top button[type=submit][value='Continue']");
   });
   /* submit form */
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