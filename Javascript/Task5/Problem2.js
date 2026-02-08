function getUser(callback) {
    setTimeout(() => {
      let user = { id: 1, name: "Ahmed" };
      console.log("User loaded");
      callback(user);
    }, 1000);
  }
  
  function getOrders(userId, callback) {
    setTimeout(() => {
      let orders = [{ id: 101 }, { id: 102 }];
      console.log("Orders loaded");
      callback(orders);
    }, 1000);
  }
  
  function getOrderDetails(orderId, callback) {
    setTimeout(() => {
      let details = { orderId: orderId, price: 500 };
      console.log("Details loaded");
      callback(details);
    }, 1000);
  }

  
  getUser(user => {
    getOrders(user.id, orders => {
      getOrderDetails(orders[0].id, details => {
        console.log(details);
      });
    });
  });
  
  // user
  // order
  // details 
