interface IAnimal {
    walk?: string,
    run?: string,
    swim?: string,
    say: string

    info(): string
}

class Cat implements IAnimal {
    run: string;
    swim: string;
    walk: string;
    say: string;

    constructor(run: string, walk: string, say: string) {
        this.run = run;
        this.walk = walk;
        this.say = say;
    }

    info(): string {
        return `It runs ${this.run}, walks ${this.walk} and say ${this.say}.`;
    }

}

let gingerCat = new Cat('slowly', 'around', 'meow-meow');
gingerCat.info();

class Fish implements IAnimal {
    swim: string;
    say: string;

    constructor(swim: string, say: string) {
        this.swim = swim;
        this.say = say;
    }

    info(): string {
        return `It swims ${this.swim} and says ${this.say}.`;
    }
}

let sailFish = new Fish('110 km/h', 'nothing at all');
sailFish.info();

class Bird implements IAnimal {
    fly: string;
    say: string;

    constructor(fly: string, say: string) {
        this.fly = fly;
        this.say = say;
    }

    info(): string {
        return `it flies ${this.fly} and says ${this.say}.`
    }
}


let swift = new Bird('like a shot', 'squawk');
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
