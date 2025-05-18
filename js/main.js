let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".menu-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

$(document).ready(() => {
  const btnSubmit = $("button[type=submit]");
  const apiKey = "3hUBiuIT4SovDhQ3P6ATaDnIuVLGpXhz";
  const limit = 18;
  btnSubmit.click(() => {
    const searchText = $("#inp-search").val().trim();

    if (searchText) {
      const targetG = document.querySelector(".targetGif-container");
      let img = targetG.querySelector('img');
      if (!img) {
        
      } else {
        targetG.removeChild(document.querySelector("img"));
      }
      getData(searchText);
    } else {
      return;
    }
  });

  getData("happy");

  function getData(txtSearch) {
    $.ajax({
      url: "https://api.giphy.com/v1/gifs/search",
      method: "GET",
      data: {
        api_key: apiKey,
        q: txtSearch,
        limit: limit,
      },
      success: (response) => {
        const gifsContainer = $(".gifs-container");
        gifsContainer.empty();
        /* loop my data to get each gif url*/
        response.data.forEach((gif) => {
          /* get my gif url (getUrlgif) */
          const getUrlGif = gif.images.fixed_width.url;
          const elementGif = `
                        <div class = "gif-item">
                            <img src="${getUrlGif}" alt="${txtSearch}">
                        </div>
                    `;
          gifsContainer.append(elementGif);
        });

        const gifs = document.querySelectorAll("img[src]");
        const targetContainer = document.querySelector(".targetGif-container");
        const img = document.createElement("img");
        gifs.forEach((gifTarget) => {
          gifTarget.addEventListener("click", (e) => {
            const gifLink = e.target.src;
            if (gifLink !== null) {
              img.setAttribute("src", gifLink);
              img.setAttribute("alt", e.target.alt);
              targetContainer.append(img);
            }
          });
        });
      },
      error: (error) => {
        console.log("error: " + error);
      },
    });
  }
});
