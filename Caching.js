const cache={
    //key:url value:res

}


async function fetchData(url){
    if(cache.hasOwnProperty(url)){
        return cache[url]
    }
    const data=await fetch(url).then((res)=>res.json());
    cache[url]=data
    return data
}



(async function(){
    await fetchData("https://jsonplaceholder.typicode.com/comments/1")
    await fetchData("https://jsonplaceholder.typicode.com/comments/1")
    await fetchData('https://jsonplaceholder.typicode.com/comments/1')
})()