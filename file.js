console.log("Halo")
const a=20;
const b=30;
console.log(a+b)
const s="Apple1234";
console.log(s)
const arr=[1, 2.4,"Booooo",true];
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
arr[1]=3.7
console.log(arr[1])
arr.push("Ahahahahaha");
console.log(arr)
arr.pop()
console.log(arr)

function example(){
    console.log("I'm a potato")
}

const pid=document.getElementById("pid");
pid.innerHTML="Print Statement";

const input=document.getElementById("input");
const output=document.getElementById("inputFeild");
input.addEventListener("input",()=>{
    output.textContent=input.value
})

const first=document.createElement("h1");
first.textContent="I'm sleepy"
document.body.appendChild(first)
first.remove()