// const url = "https://artposters-3f2b.restdb.io/rest/artists?q={"Exhibition":"blood"}" ;

// fetch(url)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     gotData(data);
//   });

// //loop through
// function gotData(data) {
//   data.forEach(showCategory);
// }
// function showCategory(category) {
//   const template = document.querySelector("plasticartisttemplate").content;
//   const copy = template.cloneNode(true);

//   copy.querySelector(".artistname").textContent = artist.artistname;

//   copy.querySelector("#artisttlistlink").href = `artist.html?id=${artist._id}`;

//   const parent = document.querySelector("section");
//   parent.appendChild(copy);
// }


function loadBlood() {
    const url = `https://kea2021-907c.restdb.io/rest/bags?q={"typeOfTheBag":"${current_filters.bag_types}"}`
    const header = {
    "method": "GET",
    "headers": {
        "x-apikey": "602e264f5ad3610fb5bb6267",
        "Content-Type": "application/json"
        }
    }  