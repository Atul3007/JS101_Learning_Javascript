//["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
 //[32, 30, 26, 28, 44];
let i=0;
let arr=[
  {name:"Nrupul",age:32},
  {name:"Prateek",age:30},
  {name:"Aman",age:26},
  {name:"ALbert",age:28},
  {name:"Yogesh",age:44}
  ];
for(leti=0;i<=arr.length-1;i++){
  if(arr[i]["age"]<30){
    console.log(arr[i]["name"]);
  }
}