let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
$(document).ready(() => {
    const btnSubmit = $('button[type=submit]');
    const apiKey = '3hUBiuIT4SovDhQ3P6ATaDnIuVLGpXhz';
    const limit = 9;
    btnSubmit.click(() => {
        const searchText = $('#inp-search').val().trim();
        console.log(searchText)
    })
})