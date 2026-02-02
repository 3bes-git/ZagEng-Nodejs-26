let input = [
    { name: "Ahmed", age: 23 },
    { name: "Sara", age: 16 },
    { name: "Mona", age: 19 }
  ];

function adult(people) {
    return people.filter(p => p.age >= 18).map(p => p.name);
  }
  
 
  console.log(adult(input));
  