const url =
  'https://artposters-3f2b.restdb.io/rest/artists?q={"Exhibition": "blood"}';
const mediaurl = "https://artposters-3f2b.restdb.io/media/";
const options = {
  headers: { "x-apikey": "61a7868dd31f354b1153f446" },
};

fetch(url, {
  method: "GET",
  headers: {
    "x-apikey": "61a7868dd31f354b1153f446",
  },
});

fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    showBloodloop(data);
  });

function showBloodloop(data) {
  console.log(data);
  data.forEach(showBlood);
}

function showBlood(artist) {
  console.log(artist);

  const template = document.querySelector("#bloodartisttemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".artistnamee").textContent = artist.artistname;
  copy.querySelector("#bloodartist").href = `artist.html?id=${artist._id}`;

  const parent = document.querySelector(".blood-artists");
  parent.appendChild(copy);
}
