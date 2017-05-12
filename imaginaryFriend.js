var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function (name){
    this.name = name;
};

util.inherits(Person, EventEmitter);

var imaginaryFriend = new Person('Your Friend');

imaginaryFriend.on('saySomethingNice', function (said) {
    console.log(`${this.name} says, ${said}`);
})

imaginaryFriend.emit('saySomethingNice', '"You are my best real friend."');

