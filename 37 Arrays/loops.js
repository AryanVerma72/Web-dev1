console.log("This is code of loop in array")

let ar = [2,54,23,56,23,76,78]
// console.log(ar)

// for (let i = 0; i < ar.length; i++) {
//     const element = ar[i];
//     console.log(element)
    
// }

ar.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})