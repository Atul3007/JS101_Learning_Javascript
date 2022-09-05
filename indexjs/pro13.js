let reg_username="Abcd";
let reg_pass="A12345";
let sub_username="Abcd";
let sub_pass="A12346";
if(reg_username=== sub_username){
  if(reg_pass===sub_pass){
    console.log("login successful");
  }else{
    console.log("passward not match");
  }
}else{
  console.log("username incorrect");
}