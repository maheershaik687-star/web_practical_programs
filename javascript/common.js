const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn){
menuBtn.onclick = () =>{
    navMenu.classList.toggle("show");
};
}

const themeBtn=document.getElementById("themeBtn");

if(localStorage.getItem("theme")=="dark"){
document.body.classList.add("dark");
if(themeBtn) themeBtn.innerHTML="☀️";
}

if(themeBtn){
themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
    themeBtn.innerHTML="☀️";
}else{
    localStorage.setItem("theme","light");
    themeBtn.innerHTML="🌙";
}

};
}