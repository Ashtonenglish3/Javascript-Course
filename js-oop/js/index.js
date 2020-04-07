//you can use LET if you want to declore another variable and use CONST to declare once


//factory function
function createCircle(radius){

    return {
        radius,
        draw: function() {
            console.log('draw');
        }
        };
}
const circle = createCircle(1);

//constructor function
function Circle(radius){    
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);