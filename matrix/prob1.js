//Given a square matrix print both the diagonals

let arr=[
[1,2,3],
[4,5,6],
[7,8,9]
];
let row=arr.length;
let col=arr[0].length;
let sum_left=0;
let sum_right=0;
for(let i=0;i<=arr.length-1;i++){
  for(let j=0;j<=arr[0].length-1;j++){
    if(i==j){
      sum_left+=arr[i][j];
    }if(i+j==row-1){
      sum_right+=arr[i][j];
    }
  }
}console.log("Sum of left diagnol",sum_left);
console.log("Sum of right diagnol",sum_right);