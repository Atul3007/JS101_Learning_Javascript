let obj={
  data = (
    name=["Rice", "Dal", "Salt"],
    quantity=[2, 3, 1],
    price=[60, 50, 20]
  ); let sum=0;
    total : function(){
    for(let i=0;i<=data[quantity].length-1;i++)
      for(let j=i;j<=data[price].length-1;j++)
        tot=data[quantity][i]*data[price][j];
        sum=sum+tot;
      console.log(sum);
    
  }
}