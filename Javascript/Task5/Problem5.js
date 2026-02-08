// function getData(callback) {
//     setTimeout(() => {
//       callback("Data Loaded");
//     }, 1000);
//   }
  
//   getData(result => {
//     console.log(result);
//   });
  

// function getData() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve("Data Loaded");
//       }, 1000);
//     });
//   }
  
//   getData().then(result => {
//     console.log(result);
//   });
  

function getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data Loaded");
      }, 1000);
    });
  }
  
  async function showData() {
    let result = await getData();
    console.log(result);
  }
  
  showData();
  