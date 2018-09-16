//var os = require('os');

function timeTransform(uptime) {
    var second = uptime;
    var minute = 0;
    var hour = 0;
    if (second >= 60) {
        minute = Math.floor(second / 60);
        second = Math.floor(second % 60);
    }
    if (minute >= 60) {
        hour = Math.floor(minute / 60);
        minute = minute % 60;
    }
    var time = hour + ' h ' + minute + ' min ' + second + ' s';
    return time;

}

exports.print = timeTransform;