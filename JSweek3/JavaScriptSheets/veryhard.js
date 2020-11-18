// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
 
// See next page…
// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?


function Person(name,job,age){
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = function (){
        return this.name + ' loves to swim!'
    }
}

var p1 = new Person('Mark', 'Poet', 28);
var p2 = new Person ('Adam', 'Artist', 40);


console.log(p1.exercise())

fetchJob = function () {
return this.name + " is a " + this.job
}
console.log(fetchJob(p1))



function Programmer(name, job, age, language) {
    Person.call(this, name, job, age)
    this.language = language;
    this.busy = true;
    this.completeTask = function (){
        this.busy = fasle;
    }
    this.acceptNewTask = function () {
        this.busy = true ;
    }
}

Programmer.prototype.offerNewTask = function (){
    if (this.busy === true){
        return this.name + " can't accept any new tasks right now."
    } else if (this.busy === false){
        return this.name + "would love to take on a new responsibility."
    }
    learnLanguage = function (language) {
        this.languages.push(language)
     }
     listLanguages = function () {
        console.log(...this.languages)
    }
}



var p3 = new Programmer("Sara", 'teacher', 45, ['CSS', 'HTML', 'ENG']);

var p4 = new Programmer("Bella", 'waitress', 18, ['Javscript', 'HTML'])

console.log(p3.offerNewTask());