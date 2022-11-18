// //Apply ,Call& Bind in js

// //call
// //problem statement
// let userDetails={
//     name:"Prabhat Singh",
//     Age:21,
//     Designation:"Softwaare Enginner",
//     printDetails:function(){
//         console.log(this)
//     }
// }

// // userDetails.printDetails();

// let userDetails2={
//     name:"Nancy Singh",
//     Age:21,
//     Designation:"Softwaare Enginner",
    
// }
// userDetails.printDetails.call(userDetails2)




//calls is a method for an object substituiting another object from current object

//generic function

let userDetails3={
    name:"sujata Singh",
    Age:21,
    Designation:"Softwaare Enginner",
   
}
let userDetails4={
    name:"Sweta Singh",
    Age:21,
    Designation:"Softwaare Enginner",
   
}
let printDetails=function(state,Country){
    console.log(this.name,state,Country)
}
// console.log(this)
// printDetails.call(userDetails3,"Delhi","India")
// printDetails.call(userDetails4,"Delhi","India")




//Apply

// printDetails.apply(userDetails3,["Delhi","India"])
// printDetails.apply(userDetails4,["Delhi","India"])




// let x=printDetails.bind(userDetails3,"Delhi","India")
// x()
// let y=printDetails.bind(userDetails4,"Delhi","India")
// y()





