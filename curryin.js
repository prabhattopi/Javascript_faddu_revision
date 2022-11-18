


//  function sum(a){
//     return function(b){
     
//         return function(c){
//             return function(d){
//                 console.log(a,b,c,d)
//             }
//         }
//     }


//  }

// const sum=a=>b=>c=>d=>console.log(a+b+c+d)

// sum(5)(10)(7)(3)

const a=b=>c=>d=>console.log(b+c+d)
a(1)(2)(3)






// currying is a technique of evaluating function with multiple arguments, into sequence of function with single arguments


//in other when a function takes a function return a new funcition

//user if helps us to avoid passing the same variable again again

//it user to make higher order function . it extremely used in event handling



// console.log(sum(5,10,7,3))//NO Consider this in real life
