// var url = "https://artposters-3f2b.restdb.io/rest/artists?max=28";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://artposters-3f2b.restdb.io/rest/artists/" + id;
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
    handleArtistList(data);
  });

// function handleArtistList(data) {
//   data.forEach(showArtistone);
// }

function handleArtistList(artist) {
  //console.log(bags);

  document.querySelector(".nameofartist").textContent = artist.artistname;
}

// const url =
//   "https://artposters-3f2b.restdb.io/rest/artists/61a74cf63abd19450008a879";

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => showArtist(data));
// function showArtist(artist) {
//   console.log(artist);
//   document.querySelector("h2.nameofartist").textContent = artist.artistname;
// }
