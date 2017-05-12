var EventEmitter = require('events').EventEmitter;

var Person = require('./person');

var imaginaryFriend = new Person('Your Friend');
var imaginaryParents = new Person('Your Parents');
var imaginaryLove = new Person ('Your Love');
var imaginaryEnemy = new Person ('Your Enemy');

imaginaryFriend.on('say', function (said) {
    console.log(`${this.name} says, ${said}`);
});
imaginaryParents.on('assure', function (said) {
    console.log(`${this.name} assures you, ${said}`);
});
imaginaryLove.on('adore', function (said) {
    console.log(`${this.name} whispers, ${said}`);
});
imaginaryEnemy.on('concede', function (said) {
    console.log(`${this.name} admits, ${said}`);
});

imaginaryFriend.emit('say', '"You are my best real friend."');
imaginaryParents.emit('assure', '"You are our favorite child."');
imaginaryLove.emit('adore', '"You are the love of my life."');
imaginaryEnemy.emit('concede', '"You are not that bad."');
