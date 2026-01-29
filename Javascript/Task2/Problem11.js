let arr = [];

for (let i = 0; i < 5; i++) {
  let age = prompt("Enter age ", "age");
  arr.push(age);
  if(arr[i]>=18){
    console.log(arr[i]);
  }else{
    console.log("baby");
  }
}
