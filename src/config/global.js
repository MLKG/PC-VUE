import Vue from 'vue'
let vuePrototype = Vue.prototype

// vuePrototype._showMessage = function (msg) {
//   console.log(msg)
//   this.$emit('setMessage', msg)
// }

// vuePrototype._scrollToBottom = function () {
//   if (document.body.offsetHeight < window.screen.height) {
//     return false
//   } else {
//     return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
//   }
// }

// // 获取滚动条当前的位置
// vuePrototype._getScrollTop = function () {
//   let scrollTop = 0
//   if (document.documentElement && document.documentElement.scrollTop) {   // 判断浏览器支持
//     scrollTop = document.documentElement.scrollTop  // 拿到高度赋值给高度变量
//   } else if (document.body) {
//     scrollTop = document.body.scrollTop
//   }
//   return scrollTop
// }

// // 获取当前可是视范围的高度
// vuePrototype._getClientHeight = function () {
//   let clientHeight = 0 // 定义可视范围变量
//   if (document.body.clientHeight && document.documentElement.clientHeight) {   // 判断浏览器支持类型
//     clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)  // 给可视范围变量赋值
//   } else {
//     clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
//   }
//   return clientHeight
// }

// // 获取文档完整的高度
// vuePrototype._getScrollHeight = function () {
//   return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
// }

// // 相当于angular的$filter
// vuePrototype._filterObj = function (obj, key, value) {
//   return obj.filter((item) => { return item[key] === value })
// }

// // 压缩图片
// vuePrototype._compressImage = function (imgData, cb) {
//   var canvas = document.createElement('canvas')
//   var img = new Image()
//   img.src = imgData
//   img.onload = function () {
//     var ctx = canvas.getContext('2d')
//     var width = img.width
//     var height = img.height
//     var MAX_WIDTH = 800
//     var MAX_HEIGHT = 600
//     if (width > height) {
//       if (width > MAX_WIDTH) {
//         height *= MAX_WIDTH / width
//         width = MAX_WIDTH
//       }
//     } else {
//       if (height > MAX_HEIGHT) {
//         width *= MAX_HEIGHT / height
//         height = MAX_HEIGHT
//       }
//     }
//     canvas.width = width
//     canvas.height = height
//     ctx.drawImage(img, 0, 0, width, height)
//     var data = canvas.toDataURL('image/jpeg', 0.5)
//     cb(data)
//   }
// }

// 存储Cookie
vuePrototype._setCookie = function (name, value, iDay, iMinutes) {
  let oDate = new Date()

  if (!iDay && !iMinutes) {
    document.cookie = name + '=' + value
    return
  } else if (iDay) {
    oDate.setDate(oDate.getDate() + iDay)
  } else if (iMinutes) {
    oDate.setMinutes(oDate.getMinutes() + iMinutes)
  }
  document.cookie = name + '=' + value + ';expires=' + oDate
}
// 获取Cookie
vuePrototype._getCookie = function (name) {
  let aCookie = document.cookie.split('; ')
  let i

  for (i = 0; i < aCookie.length; i++) {
    let aCookie2 = aCookie[i].split('=')

    if (aCookie2[0] === name) {
      return aCookie2[1]
    }
  }
  return null
}

// 移除Cookie
vuePrototype._removeCookie = function (name) {
  this._setCookie(name, '', -1)
  return ''
}
