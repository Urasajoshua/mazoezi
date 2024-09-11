const names = [
    {
    name:'joshua',
    age: null},
    {
    name:'erick',
    age:null},
    {
    name:'eugen',
    age:null}
]

const joshua = 23
const erick = 26
const eugen = 28

names.map((x,i)=>{
    if(x.name=='joshua'){
        x.age=joshua
        console.log(x);  
    }
    else if(x.name == 'erick'){
        x.age=erick
        console.log(x);
        
    }
    else{
        x.age=eugen
        console.log(x);
        
    }
})
