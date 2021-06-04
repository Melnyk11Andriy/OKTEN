var Cat = /** @class */ (function () {
    function Cat(run, walk, say) {
        this.run = run;
        this.walk = walk;
        this.say = say;
    }
    Cat.prototype.info = function () {
        return "It runs " + this.run + ", walks " + this.walk + " and say " + this.say + ".";
    };
    return Cat;
}());
var gingerCat = new Cat('slowly', 'around', 'meow-meow');
gingerCat.info();
var Fish = /** @class */ (function () {
    function Fish(swim, say) {
        this.swim = swim;
        this.say = say;
    }
    Fish.prototype.info = function () {
        return "It swims " + this.swim + " and says " + this.say + ".";
    };
    return Fish;
}());
var sailFish = new Fish('110 km/h', 'nothing at all');
sailFish.info();
var Bird = /** @class */ (function () {
    function Bird(fly, say) {
        this.fly = fly;
        this.say = say;
    }
    Bird.prototype.info = function () {
        return "it flies " + this.fly + " and says " + this.say + ".";
    };
    return Bird;
}());
var swift = new Bird('like a shot', 'squawk');
console.log(swift.info());
// abstract class AShape {
//     sideA: number;
//     sideB: number;
//     descriptions: string;
//
//     constructor(sideA: number, sideB: number) {
//         this.sideA = sideA;
//         this.sideB = sideB;
//     }
//
//     perimeter(): number {
//         return this.sideA + this.sideB ;
//     }
//
//      area(): number {
//         return this.sideA * this.sideB;
//     }
//
// }
//
// class Triangle extends AShape {
//
// }
