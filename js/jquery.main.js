$( document ).ready(function() {
    let navBtn = document.querySelector('.nav-btn');
    let navbar = document.querySelector('.nav-bar');
    navBtn.addEventListener('click', function(){
        navbar.classList.toggle('active');
       
    })
})