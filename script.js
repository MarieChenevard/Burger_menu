var btn = document.querySelector('.toggleBtn');
var nav = document.querySelector('.nav');

btn.onclick = function(){
    nav.classList.toggle('nav_open');

}

btn.addEventListener('click',()=>{
    btn.classList.toggle('active');
});