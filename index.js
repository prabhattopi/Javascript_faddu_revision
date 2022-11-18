// let a;
// var b;
// console.log(null==undefined)
// console.log(typeof undefined)
// console.log(5&&2&&3&&8)
// console.log(a)
// console.log(b)
// let a=2
// let b=3
// function exch(a,b){
//     console.log(b,a)


// }
// exch(a,b)

function getStarted(){
    setTimeout(() => {
        console.log("start")
    }, 1000);
}
function getEnd(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            let resu=false
            if(!resu){
                res(console.log("End"))
            }
            rej("error")
        }, 3000);
       
    })
   
}

async function start(){
     await getEnd()
    getStarted()

  
}
start()

// function getStarted(){
    //     setTimeout(() => {
    //         console.log("start")
    //     }, 1000);
    // }
    // function getEnd(getStarted){
       
    //         setTimeout(() => {
    //             getStarted()
    //           console.log("End")
    
    
            
              
    //         }, 3000);
           
        
       
    // }
    
    // function start(){
    //    getEnd(getStarted)
        
      
    // }
    // start()
