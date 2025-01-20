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


class Student extends People{
    constructor(name, lastName, course){
        super(name, lastName);
        this.course = course;
    }

    getNameAndCourse() {
        return `Hello ${this.name} ${this.lastName} from ${this.course}`;
    }

    sayHello() {
        return super.sayHello() + ', your course is: ' + this.course;
    }
}

const student = new Student('John', 'Doe', 'Computer Science');
console.log(student.getNameAndCourse());
console.log(student.sayHello());