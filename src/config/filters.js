import Vue from 'vue'

// 数字过滤器
Vue.filter('currency', (value, type) => {
  if (value || value === 0) {
    value = parseFloat(value)
    if (type) {
      return value.toFixed(2)
    } else {
      var digitsRE = /(\d{3})(?=\d)/g
      var decimals = 2

      if (!isFinite(value) || (!value && value !== 0)) {
        return ''
      }

      var stringified = Math.abs(value).toFixed(decimals)
      var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
      var i = _int.length % 3
      var head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : ''
      var _float = decimals ? stringified.slice(-1 - decimals) : ''
      var sign = value < 0 ? '-' : ''

      return sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float
    }
  } else {
    return value
  }
})

// 年化收益率过滤器
Vue.filter('rateFormat', (value, type) => {
  if (value || value === 0) {
    var newRate = (value * 1).toFixed(2)
    var length = newRate.length

    if (type && newRate.slice(length - 1, length) === '0') {
      return newRate.slice(0, length - 1)
    } else {
      return newRate
    }
  } else {
    return value
  }
})

// 手机号码加密
Vue.filter('phoneFormat', (value) => {
  return value.substr(0, 3) + '****' + value.substr(-4, 4)
})

// 年月日
Vue.filter('dateTime', (value, type) => {
  if (value) {
    var dateString = value.split(/[- :]/)
    if (type) {
      return dateString[0] + '年' + parseInt(dateString[1]) + '月' + dateString[2] + '日'
    } else {
      return dateString[0] + '年' + dateString[1] + '月' + dateString[2] + '日'
    }
  }
})
