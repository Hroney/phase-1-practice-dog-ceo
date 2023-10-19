const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchImages() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            for (element of data.message) {
                let imageEl = document.createElement("img");
                imageEl.src = element;
                imageEl.style.width = '25%'
                imageEl.style.height = 'auto'
                document.querySelector("#dog-image-container").appendChild(imageEl);
            }
        })
        .catch(error => console.error(error));
}

function fetchBreeds() {
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            for (element of Object.keys(data.message)) {
                let liEl = document.createElement("li");
                liEl.innerText = element;
                liEl.style.cursor = 'pointer';
                document.querySelector("#dog-breeds").appendChild(liEl);
            }
        })
        .catch(error => console.error(error));
}

function clickColor() {
    const ul = document.querySelector("#dog-breeds")
    ul.addEventListener("click", (e) => {
        console.log(e.target.tagName)
        if (e.target.tagName === "LI") {
            const currentColor = window.getComputedStyle(e.target).color;
            if (currentColor === "rgb(255, 0, 0)") {
                e.target.style.color = "";
            } else {
                e.target.style.color = "red";
            }
        }
    })
}

function hideAllButSelected() {
    const selector = document.querySelector("#breed-dropdown")
    selector.addEventListener("change", (e) => {
        const ul = document.querySelectorAll("#dog-breeds li")
        for (item in ul) {
            ul[item].style.display = '';
            if (!ul[item].innerText.startsWith(e.target.value)) {
                ul[item].style.display = 'none'
            }
        }
    })
}

window.addEventListener("DOMContentLoaded", () => {
    fetchImages();
    fetchBreeds();
    clickColor();
    hideAllButSelected();
})

