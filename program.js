/*process.stdin.setEncoding('utf-8');             //process.stdin - standard input służący do odczytu (przyjmowania informacji z zewnątrz do aplikacji). Ustawienie odpowiedniego kodowania utf-8.
process.stdin.on('readable', function () {      //ustawienie nasłuchiwania na zdarzenia odczytu. "Powyższy kod można odczytać w następujący sposób: na zdarzenie (.on) odczytu (readable), masz wykonać funkcję (function...)."
    var input = process.stdin.read();           //Tworzymy echo, które wyświetli to co wpisaliśmy w aplikacje. Metoda read() ma za zadanie odczytać to co podał użytkownik na wejściu.
    if(input !== null) {                        //aplikacja na wyjsciu spodziewa się tylko postaci string. Tworze instrukcje warunkową sprawdzającą czy na wejsciu cokolwiek istnieje.
        var instruction = input.toString().trim();      //metoda trim() usuwa wszystkie białe znaki przed i za tekstem.
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');    //process.stdout - standard output służący do wypisywania komunikatów z procesu. Wysietla to co wpisaliśmy do aplikacji.
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }
    
});*/

var  OSinfo = require('./OSinfo');

process.stdin.setEncoding('utf-8'); 
var nodeVersion = process.versions.node;
var computerName = process.env.computername;
console.log('Wersja Node: ', nodeVersion);
console.log('Nazwa koputera: ', computerName);

process.stdin.on('readable', function () {
    var input = process.stdin.read();        
        if (input !== null) {
            var instruction = input.toString().trim();
            switch (instruction) {
                case '/exit':
                    process.stdout.write('Quitting app!\n');
                    process.exit();
                    break;
                case '/sayhello':
                    process.stdout.write('hello!\n');
                    break;
                case '/getOSinfo':
                    OSinfo.print();
                    break;
                default:
                    process.stderr.write('Wrong instruction!\n');
            };
        }   
});

