class Animal {
    sayHello() {
        this.constructor.greeting = this.greeting
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class dog extends Animal{
    static greeting
    constructor(name, greeting) {
        super();
        this.name = name
        this.greeting = greeting
    }
    sayHello() {
        return super.sayHello();
    }
}
class cat extends Animal{
    static greeting
    constructor(name, greeting) {
        super();
        this.name = name
        this.greeting = greeting
    }
    sayHello() {
        return super.sayHello();
    }
}

let chien =new dog("Loto", "ouaf")
let chat =new cat("kitty", "Miaou")
console.log(chien.sayHello())
console.log(chat.sayHello())

