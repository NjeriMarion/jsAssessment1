// Write a function that takes in a string and returns it when reversed
let food = "eating"
function stringReversal(food){
    let food2=food.split()
    let reversedString = food2.sort()
    let finalstring = reversedString.join()
    return finalstring
}

console.log(stringReversal(food))

// Write a function that takes in the following array and consoles the target if it is found else
// null
// sort the array first
function dividingarray(array){
    if (array.length < 2){
        return array
    }
    let middle = Math.floor(array.length / 2)
    let leftArr = array.slice(0, middle)
    let rightArr = array.slice(middle)
    return sortingArray(dividingarray(leftArr), dividingarray(rightArr))
}

function sortingArray(left, right){
    let sortedArray = []
    while (left.length && right.length){
        if (left[0] <= right[0]){
            sortedArray.push(left.shift());
        }
        else{
            sortedArray.push(right.shift());
        }
        return [...sortedArray, ...left, ...right]
    }
}
let num = [ 2,8,0,23,5,45,76]
// console.log(dividingarray(num))

//  finding the target using binary search

function binarySearch(array, target){
    let left = 0
    let right = array.length -1
    while( left.length <= right.length){
        let middle = Math.floor((left +right)/2)
        if (array[middle] = target){
            return target
        }
        else if ( array[middle] < target ){
            left = middle +1
        }
        else {
            right = middle- 1
        }
    }
    // return null
}
let target1 = 23;
console.log (binarySearch(dividingarray(num)), target1)


// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let years = 2000
for (i in years)
while (i <= 2023){
    if (i % 4 == 0){
        console.log(`${years[i]} is a leap year`)
        i ++
    }
    else {
        console.log(`${years[i]} is not a leap year`)
    }
}
// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
let numArray = [12,87,45,75,23,64]
function product(aray){
    let p = []
    for (let i = 0; i <= aray.length; i++){
        p = aray[i] * 4
        i++
        return p
    }
    
}
console.log(product(numArray))

