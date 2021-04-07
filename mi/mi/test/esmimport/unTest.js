class Log {
  constructor () {}
  error (str, type='case') {
    str = str || ''
    console.error(`fail! ${str}： ${type}`)
  }
  info (str, type='case') {
    str = str || ''
    console.info(`ok! ${str}： ${type}`)
  }
}

class TestMethods {
  constructor () {
    this.log = new Log()
    this.desc = ''
  }
  setDesc () {
    this.desc = ''
  }
  equal (a, b) {
    if (a == b) {
      this.log.info()
      return true
    }
    if (Object.prototype.toString(a) === '[object Object]') {
      try {
        if (JSON.stringify(a) === JSON.stringify(b)) {
          this.log.info(this.desc)
          return true
        }
      } catch (error) {
        this.log.error(this.desc)
        return false
      }
    }
    this.log.error(this.desc)
    return false
  }
  isNull (val) {
    if (val===null) {
      this.log.info(this.desc)
      return true
    }
  }
}

// // 怎么把测试用例和单条测试串联起来
// class Untest{
//   constructor (options) {
//     this.options = options || {
//       test: 'unknow case',
//       items: []
//     }
//     this.isOk = true
//     this.itemDesc = {
//       desc: 'unknow description',
//       fun: ''
//     }
//   }
//   deal () {
//   }
// }

export default {
  TestMethods: new TestMethods()
}