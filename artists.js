let url = "https://artposters-3f2b.restdb.io/rest/artists?";
const mediaurl = "https://artposters-3f2b.restdb.io/media/";
const options = {
  headers: { "x-apikey": "61a7868dd31f354b1153f446" },
};

/*var settings = {
  async: true,
  crossDomain: true,
  url: "https://artposters-3f2b.restdb.io/rest/artists",
  method: "GET",
  headers: {
    "content-type": "application/json",
    "x-apikey": "e7d07e4b4cc393423d07fa196c1e2cb552d33",
    "cache-control": "no-cache",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
 */
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

function handleArtistList(data) {
  data.forEach(showArtist);
}

function showArtist(artist) {
  console.log(artist);
  const template = document.querySelector("#artistlisttemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".artistname").textContent = artist.artistname;
  const imgurl = artist.hoverimg;
  copy.querySelector(".artisthover").src = imgurl;
  console.log(imgurl);

  copy.querySelector("#artisttlistlink").href = `artist.html?id=${artist._id}`;

  const parent = document.querySelector("section");
  parent.appendChild(copy);
}

/*API key
const options = {
  headers: {
    "x-apikey": "e7d07e4b4cc393423d07fa196c1e2cb552d33",
  },
};

function getArtists() {
  fetch(url, {
    method: "GET",
    headers: {
      "x-apikey": "e7d07e4b4cc393423d07fa196c1e2cb552d33",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showProducts(response);
    });
  /* .catch((err) => {
      console.error(err);
    }); 
}

*/

/*function handleArtists(artists) {
    //console.log(artists);
    document.querySelector("h1.nameBag").textContent = artists.name;
    document.querySelector(".list li").textContent = bags.material;
    document.querySelector(".product-pic img").src = bags.photo;
    document.querySelector(".product-pic img:nth-child(2)").src = artists.photoOne;
    document.querySelector(".product-pic img:nth-child(3)").src = artists.photoTwo;
    document.querySelector(".product-pic img:nth-child(4)").src = artists.photoThree;
    document.querySelector(".list li:nth-child(2)").textContent = artists.dimensions;
    document.querySelector(".bagDesc").textContent = bags.description;
  
    document.querySelector(".addCart2").addEventListener("click", () => {
      //alert("hey!");
      //console.log(bags);
      CART.add(bags);
    });
  } 
  */

/*function showArtists(artists) {
  const parent = document.querySelector("#artisttlistlink");
  const template = document.querySelector(".artistlisttemplate").content;

  parent.innerHTML = "";

  // populate product list
  for (const artist of artists) {
    // add product to product list
    const copy = template.cloneNode(true);

    copy.querySelector("h1.artistname").textContent = artist.artistname;
    copy.querySelector("img.artisthover").src = artist.hoverimg;
    copy.querySelector(
      "#artistlistlink"
    ).href = `../one_product/one_product.html?id=${product._id}`;

    parent.appendChild(copy);
  }
} */
