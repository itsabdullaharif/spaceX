let dataSec = [];
let objData = [];
let dataArr = [];
let A1 = document.getElementById('cardId');

fetch("https://api.spacexdata.com/v4/launches").then((data) => data.json())
    .then((objData) => {
        dataArr = objData.map((values) => {
            dataSec += `
            <div class="card">
            <div class="img">
                <img src="${values.links.patch.small}" id="img" alt="">
            </div>
            <div class="text-flex">
                <h3 class="name">${values.flight_number + ". " + values.name}</h3>
                <p class="details">${values.details + "."}
                </p><br>
                <a href="${values.links.wikipedia}" class="btn" target="_blank">
                    Read More</a>
            </div>
        </div>
        `;
            A1.innerHTML = dataSec;
        })
    })

function inputFunc() {
    // let value = document.getElementById('searchBar').value;
    let card = document.getElementsByClassName("card")
    var searchBar = document.getElementById('searchBar').value.toLowerCase();
    var eventCatch = event.target.value;
    console.log(eventCatch);
    console.log(card);
    var name = document.getElementsByClassName('name');
    var details = document.getElementsByClassName('details')
    console.log(details)
    var textFlex = document.getElementsByClassName('text-flex');
    console.log(textFlex)
    console.log(name);
    for (let i = 0; i < name.length; i++) {
        let card = textFlex[i].parentNode

        if (name[i].innerHTML.toLowerCase().includes(eventCatch) ||
            details[i].innerHTML.toLowerCase().includes(eventCatch)
        ) {
            card.style.display = 'flex'
            console.log(name[i]);
        }
        else {
            card.style.display = 'none';
        }
    }
}

