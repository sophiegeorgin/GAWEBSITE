var url = "https://artposters-3f2b.restdb.io/rest/artists?max=28";
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

function handleArtistList(data) {
  data.forEach(showArtistone);
}

function showArtistone(artist) {
  //console.log(bags);
  document.querySelector("h1.nameBag").textContent = bags.name;
  document.querySelector("h1.priceBag").textContent = `${bags.price} DKK`;
  document.querySelector(".list li").textContent = bags.material;
  document.querySelector(".product-pic img").src = bags.photo;
  document.querySelector(".product-pic img:nth-child(2)").src = bags.photoOne;
  document.querySelector(".product-pic img:nth-child(3)").src = bags.photoTwo;
  document.querySelector(".product-pic img:nth-child(4)").src = bags.photoThree;
  document.querySelector(".list li:nth-child(2)").textContent = bags.dimensions;
  document.querySelector(".bagDesc").textContent = bags.description;

  document.querySelector(".addCart2").addEventListener("click", () => {
    //alert("hey!");
    //console.log(bags);
    CART.add(bags);
  });
}
