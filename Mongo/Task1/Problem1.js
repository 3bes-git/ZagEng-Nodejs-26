//Part1&2
use('Library');
db.users.insertMany([
    {name:"Ahmed Abbas",age:20,role:"user"},
    {name:"Ahmed Hamdy",age:19},
    {name:"Mohamed Salah",age:33,role:"admin"},
    {name:"Yousef Hmsih",age:25,role:"user"},
    {name:"Sayed Elwan",age:35,role:"user"},
    {name:"Mena Sameh",age:40,role:"admin"},
]);
db.books.insertMany([
    { title: "Grokking Algorithms", pages: 280 },
    { title: "Mongo Basics", pages: 150 },
    { title: "Advanced MongoDB", pages: 300 },
    { title: "Node.js Guide", pages: 220 },
    { title: "JS for Beginners", pages: 120 }
  ]);

//Part3
  //1
  db.users.find({age:{$gt:21}})
  //2
  use('Library');
  db.users.find({$or:[{role:"admin"},{age:{$lt:20}}]});
  //3
  use('Library');
  db.users.find({$and:[{age:{$lt:30}},{age:{$gt:20}}]});
  //4
  use('Library');
  db.users.find({role:{ $exists: false }});
  //5
  use('Library');
  db.books.find({pages:{$gt:200}});
  //6
  use('Library');
  db.books.find({$or:[{title:"Mongo Basics"},{pages:{$lt:180}}]});
  //7
  use('Library');
  db.books.find({},{title:1,pages:1,_id:0}).sort({pages:-1}).limit(2);
  //8
  use('Library');
  db.users.updateMany({age:{$lt:21}}, { $inc: { age: 1 } });
  db.users.find();
  //9
  use('Library');
  db.users.updateMany({role:"admin"}, { $set: { isActive: true } });
  db.users.find();
  //10
  use('Library');
  db.users.insertOne({name:" Hamdy",age:15});
  use('Library');
  db.users.deleteMany({ age:{$lt:18} });
  db.users.find();
  //11
  use('Library');
  db.books.find();
  use('Library');
  db.books.deleteMany({ pages:{$lt:150} });
  db.books.find();
