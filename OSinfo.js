var os = require('os');                     //import modułu os (require = wymagać, zażądać, żądać, potrzebować)
var UPtime = require('./UPtime');


var getOSinfo = function () {
    var osType = os.type();                     //metoda os.type() zwraca string określający nazwę systemu operacyjnego (Linux, Darwin dla Mac, windows NT dla windows)
    if (osType === 'Darwin') type = 'OSX';
    else if (osType === 'Linux') type = 'Linux';
    else type = 'Windows';

    var osCpus = os.cpus()[0].model;            //metoda os.cpus() zwraca informacje o procesorze w postaci tablicy    
    var osRelease = os.release();               //metoda os.release() zwraca string określający wydanie systemu operacyjnego
    var osUptime = os.uptime();                 //metoda os.uptime() zwraca czas (w sekundach) działania systemu od ostatniego uruchomienia
    var osUserInfo = os.userInfo();             //metoda os.userinfo() zwraca obiekt. Informacje na temat użytkownika systemu.   

    console.log('System: ', osType);
    console.log('Wydanie: ', osRelease);
    console.log('Cpu model: ', osCpus);
    console.log('Czas działania systemu: ', UPtime.print(osUptime));   
    console.log('Nazwa użytkownika: ', osUserInfo.username);
    console.log('Katalog domowy: ', osUserInfo.homedir);
}


exports.print = getOSinfo;