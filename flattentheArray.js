const array=[1,2,3,[1,2,[3,5,[4,5]]]]

// console.log(array.flat(Infinity))
function flatt(array){
    let newArray=array.reduce((acc,input)=>{
        if(Array.isArray(input)){
         acc=acc.concat(flatt(input))
        }
        else{
            acc.push(input)
        }
        return acc
     },[])
     return newArray
}
console.log(flatt(array))
