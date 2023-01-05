/*
12306 去除开屏广告及倒计时

需将分流及重写里的ad.12306.cn去除，可用#out=12306

[rewrite_local]
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-response-body https://raw.githubusercontent.com/0x01-0xff/ProxyProfiles/master/QuantumultX/js/12306_time.js

[mitm]
hostname = ad.12306.cn
*/

var ad12306=JSON.parse($response.body);ad12306.materialsList&&(1==ad12306.materialsList.length?(ad12306.materialsList[0].filePath="",ad12306.advertParam.skipTime=1,ad12306.advertParam.skipTimeAgain=5,ad12306.advertParam.showSkipBtn=-1):1<ad12306.materialsList.length&&(ad12306.materialsList=[{}])),$done({body:JSON.stringify(ad12306)});