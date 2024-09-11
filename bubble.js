'use strict'
function bubbles(arr){
    let swapped;
    do {
        swapped=false
        for (let i = 0; i < arr.length-1;i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i]= arr[i+1]
                arr[i+1]=temp
                swapped = true
                
            }
        }
    } while (swapped);
}


const data = [-2,-6,20,8,4 ]
console.log('before',data);

bubbles(data)
console.log(data);
