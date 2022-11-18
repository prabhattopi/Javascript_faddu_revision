let y={
    name:"Prabaht",
    b:{
        b:{
            age:19
        }
    }
}

const createDeepClone=(input)=>{
    if(typeof input!=="object"){
        return input;//BAse Case
    }
    let copy=Array.isArray(input)?[]:{}
    for(let key in input){
        const value=input[key];
        copy[key]=createDeepClone(value)
    }
    return copy
}

let x=createDeepClone(y)
x.b.b.age=21
console.log(x)
console.log(y)
