
//Astric or start is a generator function
//generator has next throw and many thing
//each time we create different instance
//yield is for return and has many return also
//return also there to execute samjha




// function*simpleGenerator(){

//     yield 1
//     yield 2
//     yield 3
// }
// let firstGeneratorof_life=simpleGenerator()
// console.log(firstGeneratorof_life.next())
// console.log(firstGeneratorof_life.next())
// console.log(firstGeneratorof_life.next())
// console.log(firstGeneratorof_life.next())
// console.log(firstGeneratorof_life.next())

function* generatorId(){
let id=1
while(true){
    const increment=yield id
    if(increment!=null){
        id+=increment
    }
    else{
        id++
    }
 
}
}

const generatorObj=generatorId()
console.log(generatorObj.next())
// console.log(generatorObj.next())
// console.log(generatorObj.next())
// console.log(generatorObj.next())
// console.log(generatorObj.next())
// console.log(generatorObj.next())
// console.log(generatorObj.next())
// console.log(generatorObj.next())
// const generatorObj2=generatorId()

// console.log(generatorObj.next())

// function* generatorArray(array){
//     for(let i=0;i<array.length;i++){
//         yield array[i]
//     }
// }

// const generatorArrayObj=generatorArray(["Prabhat","Nancy"])
// console.log(generatorArrayObj.next())