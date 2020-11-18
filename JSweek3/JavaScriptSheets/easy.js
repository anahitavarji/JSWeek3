// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function todaysExercise(activity){
    return "Today's exercise: " + activity
}


var run = todaysExercise('Running');
console.log(run);

var swim = todaysExercise('Swimming');
console.log(swim);


