"use strict"
function liner(arr,target){
for(let i=1;i<arr.length;i++){
    if(arr[i] == target){
        return i
    }
}
return -1
}

console.log(liner([-5,2,10,4,6],10));
