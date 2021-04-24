const circle = {
  radius: 1,
  locaton: {
    x: 1,
    y: 1
  },

  draw: function() {
    console.log("love circles");
  }
};

// access members of objects using dot notations
//call function (method) draw within circle object
console.log(circle.draw());
//display keys and values in the object 'circle'
console.log(circle);

/*
    -notes on object literals

    - members object: radius, location, and draw function
    - properties: used to hold values, radius and location are examples of properties
    - functions and methods are used to define logic
    - draw is method of the object ' circle '
    - obj literal, syntax, members, mehtods, properties

    access members of object using 

*/
