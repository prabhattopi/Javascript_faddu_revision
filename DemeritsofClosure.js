// function a(){
//     var x=0,z=10
//     return function b(){
//         console.log(x,z)
//     }
// }

// var y=a()
// y()


//Reduce of polyfill

// Array.prototype.Reduce=function(cb,index=null){
//     let ar=index
//     if(index===null){
//       ar=this[0]
//     }
//     for(let key in this){
//         if(key==0&&index===null){
//             continue
//         }
//           if(this.hasOwnProperty(key)){
//             ar=cb(ar,this[key],key,this)
//           }
        
       
//     }
//     return ar

// }
// let arr=[2,2,3]
// let totalvalue=arr.Reduce((sum,e)=>{
//   return sum+=e
// })

// console.log(totalvalue)





















