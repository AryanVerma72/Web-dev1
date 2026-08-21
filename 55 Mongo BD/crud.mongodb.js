use ("CrudDb")

db.createCollection("courses")

db.courses.insertOne({
    name : "Web Dev",
    price : 1000,
    duration : 10,
    project : 12
})

db.courses.insertMany([
    
  { name: "Web Dev", price: 1000, duration: 10, project: 12 },
  { name: "App Development", price: 1500, duration: 15, project: 8 },
  { name: "UI/UX Design", price: 800, duration: 7, project: 15 },
  { name: "Frontend Dev", price: 1200, duration: 12, project: 10 },
  { name: "Backend Dev", price: 1800, duration: 18, project: 6 },
  { name: "Full Stack", price: 2500, duration: 25, project: 5 },
  { name: "SEO", price: 600, duration: 5, project: 20 },
  { name: "WordPress", price: 900, duration: 8, project: 14 },
  { name: "Mobile App", price: 2200, duration: 20, project: 7 },
  { name: "E-Commerce", price: 3000, duration: 30, project: 4 }

])


// let a = db.courses.find({price : 1000})

// console.log(a.count())

let b = db.courses.findOne({price : 1000})

console.log(b)






