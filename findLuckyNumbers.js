// Write your code below this line.

// function findLuckyNumbers(n){
//     let possNums = [1,2,3,4,5,6,7,8,9,10]
//     let luckyNumbers = [ ]
//     for(i=0;i<n; i++){
//         let randomNum = Math.floor(Math.random()*possNums.length)
//         luckyNumbers.push(possNums[randomNum])
//         possNums.splice(randomNum, 1)
//     }return luckyNumbers
// }

// console.log(findLuckyNumbers(5))

//yamasolution
let luckyNumbers = (n) => {
    //make an empty array
    let arr = []
    //make a for loop
    for(i=0; i<n; i++){
        //make a vaar in the loop
        let randomNum = Math.floor(Math.random()*10)+1
        //check if the array already has the var in it
        if(arr.indexOf(randomNum)=== -1){
            //if it does not, push it to the array
            arr.push(randomNum)
        }else{
            //if so, skip that and subract 1 from i
            i--
        }
    }return arr
}

console.log(luckyNumbers(10))

const luckyNumbers = (n) => {
    arr = []
    for(i=0; arr.length<n; i++){
        randNum = Math.ceil(Math.random()*10)
        if(arr.includes(randNum) === false){
            
        }
    }
}