let arr=[1,5,6,6]
let avg=arr.reduce((accum,currVal,index,arr)=>{
    let total=accum+=currVal;
    if(index===arr.length-1){
        return total/arr.length
    }
    return total
})
console.log(avg)