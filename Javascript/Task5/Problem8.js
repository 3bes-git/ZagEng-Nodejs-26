function delay(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }
  async function printNumbers() {
    await delay(1000);
    console.log(1);
  
    await delay(1000);
    console.log(2);
  
    await delay(1000);
    console.log(3);
  
    await delay(1000);
    console.log(4);

    await delay(1000);
    console.log(5);

    await delay(1000);
    console.log("Suiiii");
  }
  
  printNumbers();
    