console.log("This is Promise")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a > 0.5) {
        reject("No random number was supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I'm Done")
            resolve("Aryan")
        }, 3000)
    }


})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a > 0.5) {
        reject("No random number was supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I'm Done 2")
            resolve("Aryan 2")
        }, 1000)
    }


})

let p3 = Promise.race([prom1 , prom2])
p3.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err)
})