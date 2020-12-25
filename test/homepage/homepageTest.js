const config = require('../../nightwatch.conf.js');
require('env2')('.env')
module.exports = {
  "open the cdm website":(browser)=>{
    //首页nav链接及text信息
    let navlink = [
      {
        fRank:"2",
        sRank:"1",
        text:"项目组空间"
      },
      {
        fRank:"2",
        sRank:"2",
        text:"实例管理",
      },
      {
        fRank:"2",
        sRank:"3",
        text:"变量管理",
      },
      {
        fRank:"3",
        sRank:"1",
        text:"数据流转监控"
      },
      {
        fRank:"3",
        sRank:"2",
        text:"整库迁移监控"
      },
      {
        fRank:"3",
        sRank:"3",
        text:"一致性核查监控"
      }
    ]

    //浏览器访问
    browser
    .useCss()
    .url(config.baseUrl +"/console/instance")
    .waitForElementVisible('.sign-container', 1000)
    //用户登录
    .setValue("#username", "yizhifeidie123")
    .setValue("#password","A_a123123")
    //停留10秒输入验证码
    .pause(10000)
    .click("#submitBtn")
    .waitForElementVisible(".side-bar-header")


    //断言判定CDM 页面dom正确加载  
    browser
    .waitForElementVisible(".side-bar-header",1000)
    .assert.containsText(".side-bar-header", "云数据迁移")
    
    //验证首页 按钮可用并记录页面效果
    for(let i=1;i<navlink.length;i++){
      var check = async()=>{
        browser
        .useXpath()
        .click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/ul/li['+navlink[i-1].fRank+']/ul/li['+navlink[i-1].sRank+']')
        browser
        .useCss()
        .pause(2000)
        .assert.containsText('.main-header',`${navlink[i-1].text}`)
        .saveScreenshot(config.imgpath(browser) + `${navlink[i-1].text}.png`)
      }
      var doCheck = async()=>{
        await check();
      }
      doCheck();
    }
  }
}