const EventEmitter = require('events');

var url = "http://temp.io/log";

class Logger extends EventEmitter {
    log(message){
        //send http request
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged',{id:1, url:'http://food.io/food'});
    }
}
 

module.exports = Logger;