"use strict"
function binary(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        else if(target< arr[middleIndex]){
            rightIndex=middleIndex-1
        }
        else if(target>arr[middleIndex]){
            leftIndex=middleIndex+1
        }
    }
    return -1
}

console.log(binary([-5,2,4,6,10],10));