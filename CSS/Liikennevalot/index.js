let pun = document.querySelector("#punainen");
let kel = document.querySelector("#keltainen");
let vih = document.querySelector("#vihrea");
let teksti = document.querySelector("#teksti");
let punklik = document.querySelector("#punklik");
let kelklik = document.querySelector("#kelklik");
let vihklik = document.querySelector("#vihklik");
let vari = document.querySelector("#vari");

const klikkaukset =
    {
      punainen: 0,
      keltainen: 0,
      vihrea: 0,
    };

pun.addEventListener("click", (evt) => {
  teksti.innerHTML = "Punaista valoa klikattiin";
  klikkaukset.punainen += 1;
  punklik.innerHTML = "Punaiset klikkaukset: " + klikkaukset.punainen;
  vari.innerHTML = window.getComputedStyle(pun, null).getPropertyValue("background-color")
});

kel.addEventListener("click", (evt) => {
  teksti.innerHTML = "Keltaista valoa klikattiin";
  klikkaukset.keltainen += 1;
  kelklik.innerHTML = "Keltaiset klikkaukset: " + klikkaukset.keltainen;
  vari.innerHTML = window.getComputedStyle(kel, null).getPropertyValue("background-color")
});

vih.addEventListener("click", (evt) => {
  teksti.innerHTML = "Vihreää valoa klikattiin";
  klikkaukset.vihrea += 1;
  vihklik.innerHTML = "Vihreät klikkaukset: " + klikkaukset.vihrea;
  vari.innerHTML = window.getComputedStyle(vih, null).getPropertyValue("background-color")
});