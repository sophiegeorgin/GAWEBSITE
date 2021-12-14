const url =
  'https://artposters-3f2b.restdb.io/rest/artists?q={"Exhibition": "need"}';
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
    showNeedloop(data);
  });

function showNeedloop(data) {
  console.log(data);
  data.forEach(showNeed);
}

function showNeed(artist) {
  console.log(artist);

  const template = document.querySelector("#needartisttemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".artistnamee").textContent = artist.artistname;
  copy.querySelector("#needartist").href = `artist.html?id=${artist._id}`;

  const parent = document.querySelector(".need-artists");
  parent.appendChild(copy);
}
