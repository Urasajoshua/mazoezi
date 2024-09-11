function factorial(n){
    let total = 1
    for(let i=2;i<=n;i++){
        total=total * i
    }
    return total
}

console.log(factorial(4));

//big o of this linear 