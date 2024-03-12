const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll('.product').forEach(item => {
    item.addEventListener('click', function() {
        const popup = document.querySelector('.product-popup');
        popup.style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', function() {
    const popup = document.querySelector('.product-popup');
    popup.style.display = 'none';
});


document.querySelector('.product-popup').addEventListener('click', function(event) {
    event.stopPropagation();
});
