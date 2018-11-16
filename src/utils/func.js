
/**
 * 函数功能简述:判断数组中重复的项 并返回
 * 具体描述一些细节: 目前这个函数仅适用于 两个小型数组的判单，默认最后一个参数为判断的属性(暂不支持但数组去重)
 * @Author CZ
 * @date   2018-10-17
 * @return {object}   [{
 * result:重复的项
 * string：列出重复的项的字符串
 * }]
 */


const identicalArr = function () {
  let result = []
  let str = '您以下值：'
  let strend = '存在重复'
  let attribute = arguments.length > 2 ? arguments[arguments.length - 1] : '' ;  
  for (let i = 0; i < arguments[0].length; i++) {
    for (let j = 0; j < arguments[1].length; j++) {
      if(attribute==''){
        if (arguments[0][i] === arguments[1][j]) {
          result.push(arguments[0][i])
          str += arguments[0][i]+ ','
        }
      }else{
        if (arguments[0][i]['' + attribute] === arguments[1][j]['' + attribute]) {
          result.push(arguments[0][i]['' + attribute])
          str += arguments[0][i]['' + attribute] + ','
        }
      }
    }
  }
  let string = str + strend
  return {result, string}
}
/**
 * 函数功能简述:em布局-获取手机屏幕大小动态计算根元素默认fontsize大小
 * @Author CZ
 * @date   2018-10-17
 */
const calSize = function (argument) {
  let clientWidth = window.innerWidth || document.documentElement.clientWidth
  let Htmlsize = clientWidth / (375 / 40)
  document.documentElement.style.fontSize = Htmlsize + 'px'
}
const setRem = function () {
  calSize()
  window.addEventListener('resize', calSize)
}
/**
 * 函数功能简述:获取时间的相关函数
 * @Author CZ
 * @date   2018-10-31
 * @some {[Number]} 0 == 时间全部(年月日时分秒)
 * @Hexadecimal {[Number]} 1 == 12小时进制 || 2 == 24小时进制
 * @split  {[ false || string]} 年月日分隔符  
 * @sun  {[boolean}   if判断条件 == 是否获取当前星期
 * @return {[string]} 返回时间
 */
const getNowDate = function(some,sun,Hexadecimal,split){
  let sundate = ["星期天","星期一","星期二", "星期三","星期四","星期五", "星期六"]
  let splitArr = ["年","月","日"]
  let temp = ["凌晨","早上","下午","晚上"]
  var date =''
  let myDate = new Date();//获取系统当前时间
  let hours = myDate.getHours()
  let minues = myDate.getMinutes()
  let seconds = myDate.getSeconds()
  minues = minues >= 10 ? minues : "0" + minues
  seconds = seconds >= 10 ? seconds : "0" + seconds
  if(split!==false){ 
    splitArr[0]=splitArr[1]=split;
    splitArr[2]=''
  }
  if(Hexadecimal==1){
    let index = Math.floor(hours/6)
    hours = temp[index] + (hours - 12 > 0 ? hours - 12 : hours) 
  }
  switch (some) {
    case 0:
        date = myDate.getFullYear()+splitArr[0]
             + myDate.getMonth()+splitArr[1]
             + myDate.getDate()+splitArr[2]
             + " " 
             + hours+':'+ minues+':'+ seconds;
      break;
      // 函数待扩展 
    default:
      // statements_def
      break;   
  }
  if(sun){date+=" "+sundate[myDate.getDay()]}
  return date
}

export {
  diffArr,
  setRem,
  getNowDate,
  myalert
}
