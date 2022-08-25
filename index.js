// fetch('https://api.spacexdata.com/v4/launches').then((res) => console.log(res))

// let api_url = 'https://api.spacexdata.com/v4/launches'
// async function Getapi(url) {
//     let response = await fetch(url);
//     let data = await response.json();


//     console.log(data);
//     if (response) {
//         ShowData(data);
//     }
// };
// Getapi(api_url);

// function ShowData(data) {
//     for (let d of data) {
//         document.getElementById('cardId').innerHTML = struc;
//         let struc = "";
//         struc += `<div class="card">
//    <div class="img">
//  <img src="${values.large}" alt="">
// </div>
// <div class="des-cont">
// <h3>${values.flight_number}</h3>
// <div class="detailsBox">
// <p>
// </p>
//  </div>
//      </div>
//  </div>`


//     }
// }


let api_url = 'https://api.spacexdata.com/v4/launches'
async function Getapi(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (response) {
        custom();
    }
};
Getapi(api_url);

// function ShowData(data) {
//     document.getElementById('')
// }
function custom(data) {

    for (r of data) {
        document.getElementById('name').innerHTML = r.details;
    }
}
// fetch('https://api.spacexdata.com/v4/launches').then((data)=>
// {
//     return data.json
// }).then((result) => {
//     let struc = "";
//     result.map((values) => {

//         struc += `<div class="card">
//     <div class="img">
//         <img src="${values.}" alt="">
//     </div>
//     <div class="des-cont">
//         <h3>${values.flight_number}</h3>
//         <div class="detailsBox">
//             <p>
//             </p>
//         </div>
//     </div>
// </div>`
//     })


