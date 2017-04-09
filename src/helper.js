export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers
}
export const setTitle = function (title) {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isAndroid) {
    //设置页面标题
    document.title = title + ' - ' + document.title
  } else if (isiOS) {
    let $body = $('body')
    //设置页面标题
    document.title = title + ' - ' + document.title
    let $iframe = $('<iframe src="/favicon.ico"></iframe>')
    $iframe.on('load', function () {
      window.setTimeout(function () {
        $iframe.off('load').remove()
      }, 0)
    }).appendTo($body)
  }else{
    document.title = title + ' - ' + document.title
  }
}
