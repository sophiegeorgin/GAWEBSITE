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
  document.querySelector(".artistcover").src = artist.artistheader;
  document.querySelector(".imgone").src = artist.imgone;
  document.querySelector(".imgtwo").src = artist.imgtwo;
  document.querySelector(".titleone").textContent = artist.titleone;
  document.querySelector(".titletwo").textContent = artist.titletwo;
  document.querySelector(".quote").textContent = artist.quote;

  document.querySelector(".biographytext").textContent = artist.biography;

  document.querySelector(".artistimg").src = artist.artistimg;
}

window.onload = function () {
  // alert("page is loaded and rendered");
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    $(window).on("load", function () {
      $(".loader-wrapper").fadeOut("slow");
    });
  },
  false
);

// const url =
//   "https://artposters-3f2b.restdb.io/rest/artists/61a74cf63abd19450008a879";

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => showArtist(data));
// function showArtist(artist) {
//   console.log(artist);
//   document.querySelector("h2.nameofartist").textContent = artist.artistname;
// }
