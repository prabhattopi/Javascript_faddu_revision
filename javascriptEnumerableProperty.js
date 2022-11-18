let obj={
    name:"Prabht",
    uisdhfsdfsdjfiosdf:"1234"
}
Object.defineProperty(obj,
    "uisdhfsdfsdjfiosdf",{
        enumerable:false,
        value:"1234"
    }
    )
    obj['uisdhfsdfsdjfiosdf']="3456"
console.log(obj.uisdhfsdfsdjfiosdf)