let arr = [0,0,0,0,0];
let q = [
  [1, 5, 10],
  [1, 5, 20],
  [1, 2, 10],
  [2, 5],
  [1, 2, 5],
  [2, 10],
  [2, 20],
  [1, 1, 1],
  [1, 1, 10],
  [1, 5, 20],
  [1, 3, 15],
  [1, 2, 20],
  [1, 1, 30],
  [2, 5],
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

//find print after after everychanges
let sign=0
let count=0

for (let i = 0; i <q.length; i++) {
  if (q[i][0] == 1) {

  
 
    sum = sum - (sign==0?arr[q[i][1]-1]:sign);
    arr[q[i][1]-1]=q[i][2]
    sum = sum + q[i][2];
    sign=0
 
    
 
   
  } else {
   sum=q[i][1] * arr.length;
   
   sign=q[i][1]
  

    
  }
  console.log(sum);
}
