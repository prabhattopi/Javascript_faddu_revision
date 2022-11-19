let name={
    firstName:"Prabaht",
    lastName:"Singh"
}


let printName=function (hometown,state) {  
    console.log(this.firstName+" "+this.lastName,hometown,state)
}

let printMyName=printName.bind(name,"Guwahati")

printMyName("Assam")

//task my onown
Function.prototype.myBind=function (...args) {
 
    let  obj=this
    let params=args.slice(1)
    return function (...args2){
     
       obj.apply(args[0],[...params,...args2])
    }


}
let printMyName2=printName.myBind(name,"Guwahati")

printMyName2("Assam")


console.log(("b"+"a"+ +"a"+"a").toLowerCase())
// a.lowe