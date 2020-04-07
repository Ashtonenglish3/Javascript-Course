// let person = new Object();

// person.name = 'Daniel';
// person.eyeColor = 'Blue';
// person.age = 27;
// person.updateAge = function(){
//     return ++person.age;
// }

// console.log(person.age);
// person.updateAge();
// console.log(person.age);


//object constructors is multiple objects


// let person = {
//     name: "Daniel",
//     eyeColor: "Blue",
//     age: 27,
//     updateAge: function(){
//         return ++person.age;
//     }
// }


// let person02 = {
//     name: "Daniel",
//     eyeColor: "Blue",
//     age: 27,
//     updateAge: function(){
//         return ++person.age;
//     }
// }


// Object blueprint
// objects always start with capital letters
function Person(name, eyeColor, age){
    this.name = name; //name is the placeholder
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function(){
        return ++this.age;
    };

}

let person01 = new Person("Daniel", "Blue", 27);

console.log(person01);