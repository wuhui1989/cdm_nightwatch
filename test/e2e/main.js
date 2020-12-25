const homePageTest = require("../homepage/homepageTest")
const consistencyCheck = require("../consistencyCheckMonitor/consistencyCheckMonitor")

//顺序执行测试用例
module.exports = {
  "cdm homepage website":homePageTest["open the cdm website"],
  "cdm consistencyCheck search box test":consistencyCheck['search box test']
}