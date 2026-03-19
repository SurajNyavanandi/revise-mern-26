const a1=[26,25,11,9,6,6,6,6,3,5,0,0,9];
console.log(a1);
a1.forEach((i)=>console.log(i)
)
for(let i of a1){
    console.log(i);
}
let a2=a1.map((i,index)=>i+1);
console.log(a2);
console.log(a1.slice(0,6));
console.log(a1.splice(3))
console.log(a1.splice());
console.log(a1);
;



