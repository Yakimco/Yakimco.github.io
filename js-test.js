'use strict';
function Animal(name){
    this.name = name;

};

Animal.prototype.eat = function (food) {
    console.log (this.name + ' eat ' + food );
};
Animal.prototype.sleep = function () {
    console.log('sleeping');
};

var animal = new Animal();

function Lion() {

};

Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.run = function () {
    console.log(this.name + ' running')
};

var lion = new Lion();

function Rabbit() {

};

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.jump = function () {
    console.log(this.name + ' jumping');
};

var rabbit = new Rabbit();
