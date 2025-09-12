//metodo filter
const idades=[15,21,30,17,18,44,12,50]
const maior=idades.filter((v1)=>{
    if(v1 >=18){
        return v1;
    }
})

const menor=idades.filter((v2)=>{
    if(v2 <18){
        return v2;
    }
})

console.log(idades);
console.log(maior);
console.log(menor);