// // 操作localStorage
//  let val = localStorage.getItem('itemKey');
//  localStorage.setItem('itemKey', '{k:11}');
//  // 操作sessionStorage
//  let valSession = sessionStorage.getItem('itemKey');
//  sessionStorage.setItem('itemKey', '{k:33}');
//  // 操作cookie
//  let t = document.cookie;
//  document.cookie = "name=kk";
//  let temp = document.cookie;

export default class Storage {
  constructor(type='local') {
    this.storage = type === 'local' ? window.localStorage : window.sessionStorage
  }
  getItem (module, key) {
    let str = this.storage.getItem(module)
    if (str === null) return {}
    let obj = JSON.parse(str)
    return obj[key]
  }
  setItem (module, key, value) {
    let valStr = ''
    let str = this.storage.getItem(module)
    if (str === null) {
      valStr = JSON.stringify({[key]: value})
    } else {
      let obj = JSON.parse(str)
      obj[key] = value
      valStr = JSON.stringify(obj)
    }
    this.storage.setItem(module, valStr)
    return true
  }
  clear (module) {
    if (!module) {
      this.storage.clear()
      return true
    }
    setItem (module, undefined)
    return true
  }
}
