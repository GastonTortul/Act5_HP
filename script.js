let container = document.getElementById("container")
let url = "https://hp-api.onrender.com/api/characters"

let imgAlt = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/640px-HP_-_Harry_Potter_wordmark.svg.png"
fetch(url)
    .then((res) => res.json())
    .then (data => 
    {
        let cardsHTML = ""
        for(let i = 0; i < data.length; i++)
        {
            cardsHTML += `
            <div class = "card">
                <p>${data[i].name}</p>
                <img src="${data[i].image ? data[i].image : imgAlt}" alt = "imagen">
                <p>${data[i].house ? data[i].house : "desconocido"}</p>
            </div>
            `
        }
        container.innerHTML = cardsHTML
    }

    )