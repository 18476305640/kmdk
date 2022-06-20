import cokkieUtils from './cookie-utils.js'
let token = (function () {
    //获取token,如果没有,如果过期,就去登录
    let token = cokkieUtils.getCookie("token");
    
    if(token == null) {
        //没有token,

        //如果是登录页，就不忽略token，随便返回一个token即可
        if (window.location.href.indexOf("login") >= 0) {
            return "";
        }
        //如果没有存储token，要去登录页
        window.location.href = "/login.html";
    }
    return token;
})();
//导入另一个js
import './jquery-3.6.0.js'
export function Get(url,x) {
    $.ajax({
        url: "http://127.0.0.1:721"+url,
        type: "get",
        headers: {
            Authorization: "Bearer "+token
        },
        ...x
    });

}
export function Post(url,x) {
    $.ajax({
        url: "http://127.0.0.1:721"+url,
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            Authorization: "Bearer "+token
        },
        ...x
    });
}