function prime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<Math.sqrt(n);i++){
        if(n % i == 0){
            return 'prime number'
        }
        else{
            return 'not prime number'
        }
    }
}

console.log(prime(100));
