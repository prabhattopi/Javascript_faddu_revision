



// let arr=[0,0,1,0,1,1,1]

// // //Brute Froce
// // let ar1=[]
// // let ar2=[]

// // for(let i=0;i<arr.length;i++){
// //     if(arr[i]==0)
// //     {ar1.push(arr[i])
// //     }
// //     else{
// //         ar2.push(arr[i])
// //     }
// // }
// // console.log([...ar1,...ar2])

// let left=0
// let right=arr.length-1
// while(left<right){
//     while(arr[left]==0&&left<right){
//         left++
//     }
//     while(arr[right]==1&&left<right){
//         right--
//     }
//     if(left<right){
//         arr[left]=0
//         arr[right]=1
//         left++
//         right--
//     }

// }
// console.log(arr)
let a=16
let b=90
function check(a,b){
    console.log(b,a)

}
check(a,b)