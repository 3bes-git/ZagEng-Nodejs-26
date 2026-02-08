let jsonData = `[]`;

// JSON to Array
let data = JSON.parse(jsonData);

// Add object
data.push({
  id: 1,
  title: "First Item"
});

// Convert JSON
jsonData = JSON.stringify(data);

// Print JSON
console.log(jsonData);
