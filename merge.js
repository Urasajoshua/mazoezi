"use strict"
function merge(arr){
    if(arr.length < 2) return arr
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    console.log(rightArr);
    
    
    return Merge(merge(leftArr), merge(rightArr))
}

function Merge(leftArr,rightArr){
    const sortedArray = []
    while(leftArr.length && rightArr.length){
        console.log('jdjj');
        
        if(leftArr[0] <= rightArr[0]){
            sortedArray.push(leftArr.shift())
        }
        else{
            sortedArray.push(rightArr.shift())
        }
    }
    return []
}


const data = [-2,-6,20,8,4 ]
console.log('before',data);

merge(data)
console.log(data);