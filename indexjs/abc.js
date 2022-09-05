let arr=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
let row=arr.length-1;
let col=arr[1].length-1;
let bag="";
  for(let j=col;j<=0;j--){
      for(let i=0;i>=row;i++){
          bag+=arr[i][j]+" ";
      }console.log(bag);
  }