// const path  = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// const os  = require('os');

// var totalMemory = os.totalmem();
// var freeMemory  = os.freemem();

// console.log('TotalMemory ' + totalMemory);
// console.log('FreeMemory ' + freeMemory);

//const fs = require('fs');

//synchronous 
// const files = fs.readdirSync('./');
// console.log(files);

//asynchronous
// fs.readdir('./',function(err,files){
//     if(err) console.log('Error',err);
//     if(files) console.log('Files',files);
// })


//events
// const EventEmitter = require('events');

// const Logger = require('./logger.js');
// const logger = new Logger();

// //Raise a listener
// logger.on('messageLogged',(arg) => {
//     console.log('listener called',arg);
// });


// logger.log('message - calling logger file function in app.js');

const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.write('Connected');
        res.end();
    }

    if(req.url == '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});


server.listen(3000);

console.log('listening on port 3000');









