// ==UserScript==
// @name         bilibili  获取时间戳URL，以便对照视频记录文字内容
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  按 t 就能在评论区插入带时间戳的 URL的 markdown连接了
// @author       不知名网友
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// @grant        none
// @updateURL    https://github.com/JiangLongLiu/my_tampermonkey_scripts/raw/master/bilibili.com/bilibili_copyTimestampURL.user.js
// @license MIT
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keypress', function(e){
        console.log(e);
        if(e.keyCode === 116) {
            e.preventDefault();
            console.log(e.target.value);
            var time = document.querySelectorAll('.bilibili-player-video-time-now')[0].innerHTML;
            var timeYMSArr=time.split(':');
            var joinTimeStr='00h00m00s';
            if(timeYMSArr.length===3){
                 joinTimeStr=timeYMSArr[0]+'h'+timeYMSArr[1]+'m'+timeYMSArr[2]+'s';
            }else if(timeYMSArr.length===2){
                 joinTimeStr=timeYMSArr[0]+'m'+timeYMSArr[1]+'s';
            }
            var burl = window.location.href;
            burl= burl.split('?')[0]+'?t=';
            if (navigator.clipboard) {
                navigator.clipboard.writeText('[xxx'+burl+']('+joinTimeStr+')');
            }
        }
    })
    // Your code here...
})();
