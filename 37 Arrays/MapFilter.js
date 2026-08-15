console.log("This is MAP FILTER REDUCED code")

let arr = [2, 43, 42, 42, 24,56 ,67]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element ** 2)
// }

//mappinggg

let newArr = arr.map((e)=>{
    return e**2
})

console.log(newArr)


////fileterrr

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterThanSeven))



//reduced
let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a + b
}

console.log(arr2.reduce(red))
