const config = require('../../nightwatch.conf.js');
module.exports = {
  'search box test': (browser) => {
    browser
    .url(config.baseUrl +'/console/monitor/consistencyCheck')
    .useCss()
    .waitForElementVisible('.main-header', 1000, (result)=>{
      if(result.status != -1){
         //若判定搜索结果是否正确 
         browser
         .useXpath()
         .setValue('//*[@id="app"]/div/div[2]/div/div/div[2]/div/div[2]/section/div[1]/form/div[1]/div[1]/div/div[1]/input','/CDMV130_项目组/sqlf87-882')
         .click('//*[@id="app"]/div/div[2]/div/div/div[2]/div/div[2]/section/div[1]/div/button[1]')
         .waitForElementVisible('table',1000)
         browser
         .assert
         .containsText('//*[@id="app"]/div/div[2]/div/div/div[2]/div/div[2]/section/div[2]/div/div/div[1]/div[1]/div[2]/table/tbody/tr[1]/td[3]/div/span', '/CDMV130_项目组/sqlf87-882')
         .pause(1000)
         .saveScreenshot(config.imgpath(browser) + '/CDMV130_项目组/sqlf87-882.png')
         .end();
      }
    })
  },
};
