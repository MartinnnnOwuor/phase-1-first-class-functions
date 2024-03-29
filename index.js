//Practicing Callback function.

//#1;
// declaring  receivesAFunction(callback) as a function;

const  receivesAFunction = callback => {

// creating a local variable and passing it as an argument to callback;
    let value = 100;
    callback(100);
};
// invoking the callback 'callback' function by passing its argument then running it on log;
receivesAFunction(value => {
    console.log (value);
});

//#2;
// declaring returnsANamedFunction as a function;

const returnsANamedFunction = () => {

    // inside of this function create another function w/o a parameter;
    const myFunction1 = () => {
        console.log ('returning a named function');
    };
    // the string value in log is stored in myFunction1 which can be passed as an argument;
    // returnsANamedFunction returns myFunction1 which was defined;
    return myFunction1;
};

// define a new function and assign it returnsANamedFunction;
const myFunction2 = returnsANamedFunction ();

// call/ invoke the new function that stored returnsANewFunction;
myFunction2();


//#3
// declaring the function returnsAnAnonymousFunction w/o taking any arguements;
 function returnsAnAnonymousFunction () {

    // inside our function, return an anonymous function
    return function () { 
    // log run the anonymous function;
    console.log ('hii am anonymous');
    // the anonymous function is defined and returned inside the parent function;
    }
 }
 //when invoked, the returnsAnAnonymousFunction will run anonymous function;
 const newName = returnsAnAnonymousFunction ();
 newName();
