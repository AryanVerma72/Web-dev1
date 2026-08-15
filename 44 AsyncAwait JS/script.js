// async function getData(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })

// }

//Settle means resove or settle
//resolve means promise has settled successfully
//reject means promise has not settled successfully

async function getData(){
    // let x = await fetch()
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
    let data = await x.json()
      
      return data

}

async function main(){

console.log("Loading Modules")

console.log("Do somthing else")

console.log("Load Data")
let data = await getData()
console.log(data)

console.log("Process data")


console.log("task 2")
}

main()

// async function postData(url = "", data = {}){
//     const response = await fetch(url, {
//         method : "POST" , 
//         header : {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     return response.json();
// }
// postData("https://example.com/answer", {answer: 42}).then((data) => {
//     console.log(data);
// });