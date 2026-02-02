function checkPassed(students) {
  return students.map((s) => ({
    name: s.name,
    score: s.score,
    passed: (s.score >= 50),//true ,false
  }));
}
let input = [
  { name: "Ahmed", score: 80 },
  { name: "Sara", score: 40 },
];

console.log(checkPassed(input));
