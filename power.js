function power(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2 == 0){
            return true
        }
        else{
            return false
        }
        n=n/2
    }
}

console.log(power(5));
