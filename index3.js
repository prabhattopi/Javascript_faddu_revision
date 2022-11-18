let arr = [[1,4],[1,3],[1,2],[2,5],[5,6],[6,7],[6,8]];

let map=new Map()


 function DFS(map,start,n){
    let stack = [];
    stack.push(start);
    let ans = [];
    let visited = [];
    for (let i = 0;i<n;i++) visited.push(false);
    while(stack.length != 0){
        let temp = stack.pop();
        let list = map.get(temp);
        for (let i = 0;i<list.length;i++){
            if (visited[list[i] - 1] == false) stack.push(list[i]);
        }
        ans.push(temp);
        visited[temp - 1] = true;
    }
    // console.log(ans.sort((a,b)=>a-b));

    
 }

 function bfs(map,start,n){
    let distance = [];
    for (let i = 0;i<n;i++){
        distance.push(Infinity);
    }
    let queue = [];
    let visited = [];
    for (let i = 0;i<n;i++) visited.push(false);
    queue.push(start);
    distance[start - 1] = 0;
    while(queue.length != 0){
        let element = queue[0];
        queue.shift();
        let temp = map.get(element);
        for (let i = 0;i<temp.length;i++){
            distance[temp[i] - 1] = Math.min(distance[temp[i] - 1],distance[element - 1] + 1);
            if (visited[temp[i] - 1] == false) queue.push(temp[i]);
        }
        visited[element - 1] = true;
    }
    console.log(distance);
    console.log(distance[n-1]);
}



for(let i=0;i<arr.length;i++){
  
    let x=arr[i][0]
    let y=arr[i][1]
    if(map.has(x)){
        let temp=map.get(x)
        temp.push(y)
        map.set(x,temp)
    }
    else{
        let temp=[]
        temp.push(y)
        map.set(x,temp)
    }
    if(map.has(y)){
        let temp=map.get(y)
        temp.push(x)
        map.set(y,temp)
    }
    else{
        let temp=[]
        temp.push(x)
        map.set(y,temp)
    }
   
  
}

// DFS(map,1,8)
bfs(map,1,8)







