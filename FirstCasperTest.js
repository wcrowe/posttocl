/*
Post an ad to Craigslist


*** check if xpath exists ***
this.echo('Checking');
if(this.exists(x('//*[@id="pagecontainer"]/section/form/blockquote/label[10]/input'))) {
   this.echo('Exists');
 }
 else {
   this.echo('Nope, not there');
}


 */

function getWaitTime(){
  return Math.floor((Math.random() * 1500) + 500);
}

var x = require('casper').selectXPath;
var casper = require('casper').create({
  verbose: true,
  logLevel: "debug",
  pageSettings: {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11"
  }
});

/*
casper.on('run.complete', function() {
        this.echo('Test completed');
        this.exit();
        this.bypass(1);

});
*/
var utils = require("utils");
casper.waitForSelectorText = function(selector, text, then, onTimeout, timeout){
    this.waitForSelector(selector, function _then(){
        this.waitFor(function _check(){
            var content = this.fetchText(selector);
            if (utils.isRegExp(text)) {
                return text.test(content);
            }
            return content.indexOf(text) !== -1;
        }, then, onTimeout, timeout);
    }, onTimeout, timeout);
    return this;
};




casper.options.viewportSize = {width: 1920, height: 988};

casper.start('http://tampa.craigslist.org/');

casper.then(function() {
    this.captureSelector("01-main.png", "html");
});

casper.then(function() {
  this.click('#postlks > li:nth-child(2) > a');
});
casper.then(function() {
  return this.capture('02_login.png');
});

casper.then(function () {
  this.sendKeys("input[name='inputEmailHandle']", "gatorcrowe@gmail.com");
});

casper.then(function () {
  this.sendKeys("input[name='inputPassword']", "Mustang74");
});

casper.then(function() {
  return this.capture('03_filled_login.png');
});

casper.then(function () {
  this.click("button.accountform-btn");
})

casper.wait(getWaitTime());

casper.then(function() {
  return this.capture('04_logged_in.png');
});

casper.then(function () {
  this.click('form.new_posting_thing input[type="submit"]');
});

casper.wait(getWaitTime());

casper.then(function() {
  return this.capture('05_type.png');
});

//Select Services
//*[@id="pagecontainer"]/section/form/blockquote/label[10]/input
casper.then(function(){
   //this.click(x('//*[@id="pagecontainer"]/section/form/blockquote/label[10]/input'));
   this.click('input[name="id"][value="so"]');
});
casper.then(function() {
    return this.capture('06_choose_type.png');
});
//Submit Services
 //*[@id="pagecontainer"]/section/form/button
// casper.then(function(){
//   this.click(x('//*[@id="pagecontainer"]/section/form/button'));
// });

casper.wait(getWaitTime());

casper.then(function() {
    return this.capture('07_choose_category.png');
});

casper.run(function() {
  this.die();
});
