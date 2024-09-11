function insertion(arr){
    for (let i = 0; i < arr.length; i++) {
        let numberToinsert = arr[i]
        let j = i-1
        while(j >= 0  && arr[j]> numberToinsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]= numberToinsert
        
    }
}


const data = [-2,-6,20,8,4 ]
console.log('before',data);

insertion(data)
console.log(data);