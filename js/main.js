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
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search`,
            method: 'GET',
            data: {
                api_key: apiKey,
                q: searchText,
                limit: limit
            },
            success: ((response) => {
                const gifsContainer = $(".gifs-container");
                gifsContainer.empty();
                /* loop my data to get each gif url*/
                response.data.forEach(gif => {
                    /* get my gif url (getUrlgif) */
                    const getUrlGif = gif.images.fixed_width.url;
                    const elementGif = `
                        <div class = "gif-item">
                            <img src="${getUrlGif}" alt="${searchText}">
                        </div>
                    `
                    gifsContainer.append(elementGif)
                    console.log(elementGif);
                })
            }),
            error: ((error) => {
                console.log("error: " + error)
            })
        })
        console.log(searchText)
    })
})