
// a is in TDZ

greet() // very bad thing to do


console.log(a) 
let a = 40


function greet(){
    console.log('hello')
}



// how to avoid hoisting of a function
// we can avoid hoisting on functions by declaring function as expressions

var greet2 = function(a ,b){
    console.log(a , b)
}

console.log(greet2)












