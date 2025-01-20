class People {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
    
    sayHello() {
        return `Hello ${this.name} ${this.lastName}`;
    }

    fullName() {
        return `${this.name} ${this.lastName}`;
    }
}

const people = new People('John', 'Doe');
console.log(people.sayHello());

const ryan = new People('Ryan', 'Ray');
console.log(ryan.fullName());
