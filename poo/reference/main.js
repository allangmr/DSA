let number = 4;

function edit(num, value){
    num = value;
    console.log('Inside edit function:', num);
}

console.log('Before edit function:', number);
edit(number, 10);
console.log('After edit function:', number);

class A{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        return `Hello ${this.name}`;
    }
}

let a = new A('John');

function editObject(obj, value){
    obj.name = value;
    console.log('Inside editObject function:', obj.name);
}

editObject(a, 'Ryan');
console.log('After editObject function:', a);
