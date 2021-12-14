const url =
  'https://artposters-3f2b.restdb.io/rest/artists?q={"Exhibition": "plastic"}';
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
    showPlastic(data);
  });

function showPlastic(data) {
  data.forEach(showPlastic);
}

function showPlastic(artist) {
  console.log(artist);

  const template = document.querySelector("#plasticartisttemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".artistnamee").textContent = artist.artistname;
  copy.querySelector("#plasticartist").href = `artist.html?id=${artist._id}`;

  const parent = document.querySelector(".plastic-artists");
  parent.appendChild(copy);
}
