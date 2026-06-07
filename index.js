const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
e.preventDefault();

alert("Appointment request submitted successfully!");
});

window.addEventListener("scroll",()=>{
const nav=document.querySelector("nav");

if(window.scrollY>50){
nav.style.background="#000";
}else{
nav.style.background="#111";
}
});