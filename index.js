let dataSec = [];
let objData = [];
let dataArr = [];
let card = document.getElementsByClassName('card');
let A1 = document.getElementById('cardId');
document.getElementById('searchBar').addEventListener("input", searchFunc)
function searchFunc(e) {
    let value = e.target.value;
    let result = Object.values(dataArr);
    // console.log(result);
    // console.log(dataArr);
    console.log(result.filter(values => values.name));
}
fetch("https://api.spacexdata.com/v4/launches").then((data) => data.json())
    .then((objData) => {
        dataArr = objData.map((values) => {
            dataSec += `
        <div class="card">
        <div class="img">
            <img src="${values.links.patch.small}" id="img" alt="">
        </div>
        <div class="des-cont">
            <h3 id="name">${values.flight_number + ". " + values.name}</h3>
            <div class="">
                <p id="details">${values.details + "."}
                </p><br>
                <a href="${values.links.wikipedia}" class="btn" target="_blank">
                Read More</a>
            </div>  
        </div>
    </div>
        `;
            A1.innerHTML = dataSec;
            return {
                name: values.name, img:
                    values.links.patch.small, flightNumber: values.flight_number,
                details: values.details,
                links: values.links.wikipedia,
                Element: card
            }
        })
    })


// function funcbtn() {
//     console.log('btn is clicked');
//     let btn = document.getElementById('btn')
//     let link = document.getElementById('link')
//     if (link.style.display === 'none') {
//         link.style.display = 'Block'
//         btn.innerHTML = 'collapse'
//     }
//     else {
//         link.style.display = 'none'
//         btn.innerHTML = 'expand'
//     }
// }
// function funcbtn() {
//     console.log('btn is clicked');
//     let btn = document.getElementsByClassName('btn');
//     let link = document.getElementsByClassName('link');
//     console.log('it works', link)
//     if (link.style.display === 'none') {
//         link.style.display = 'Block'
//         btn.innerHTML = 'collapse'
//     }
//     else {
//         link.style.display = 'none'
//         btn.innerHTML = 'expand'
//     }
// }
















// fetch("https://api.spacexdata.com/v4/launches").then((data) => {
//     return data.json();
// }).then((objData) => {
//     console.log(objData);
//     let dataSec = "";
//     objData.map((values) => {
//         dataSec += `
//         <div id="abcd">
//         <img src="${values.links.patch.small}" >
//         <h1>${values.name}</h1>
//         </div>
//         `;
//         console.log('hello World')
//         console.log(values)
//         let A1 = document.getElementById('cardId');
//         A1.innerHTML = dataSec;
//     })
// })