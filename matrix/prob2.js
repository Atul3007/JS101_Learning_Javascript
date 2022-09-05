//Given a matrix print it in the form of a snake

let arr=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
let row=arr.length;
let col=arr[0].length;
for(let i=0;i<=row-1;i++){
  if(i%2==0){
     for(let j=0;j<=col-1;j++){ 
       console.log(arr[i][j]);
    } else {
    for(let j=col-1;j>=0;j--){
      console.log(arr[i][j]);
    }
    }
  }