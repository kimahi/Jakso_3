let doggo = document.querySelector(".doggo");
let blueduck = document.querySelector(".blueduck");
let blackduck = document.querySelector(".blackduck");
let redduck = document.querySelector(".redduck");
let body = document.getElementsByTagName("body")[0];
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let shots = 0;
let used = 0;
let deads =0;
let lopetus = document.getElementById("loppu");
let sini = document.getElementById("sini");
let must = document.getElementById("must");
let puna = document.getElementById("puna");
let ampu = document.getElementById("ampu");
let gunshot = new Audio("shot2.mp3");
let laugh = document.querySelector(".laughing");
let button = document.getElementsByTagName("button")[0];

const reload = () => {
  location.reload();
};

const shooting = () => {
  if (shots > 0) {
    gunshot.load();
    gunshot.play();
    ampu.style.display = "block";
    setTimeout(()=>{
      ampu.style.display = "none";
    },25);
    used++;
  }
};

body.onclick = shot = () => {
  shooting();
  if (shots === 3) {
    shots--;
    third.style.display = "none";
  } else if (shots === 2) {
    shots--;
    second.style.display = "none";
  } else {
    shots--;
    first.style.display = "none";
  }
};

end = () => {
  lopetus.innerText = "You used " + used + " shots and got " + deads + " ducks!";
  button.style.display = "block";
};

/*KOIRA*/

setTimeout(()=>{
  doggo.classList.add("dogwalk");
},50);

setTimeout(()=>{
  doggo.style.display="none";
},8000);

/*SININEN SORSA*/

setTimeout(()=>{
  shots = 3;
  blueduck.classList.add("blueFlyStr");
  first.style.display = "block";
  second.style.display = "block";
  third.style.display = "block";
},8000);

let blueFlyCor = setTimeout(()=>{
  blueduck.classList.add("blueFlyCor");
}, 11000);

let blueFlyBack = setTimeout(()=>{
  blueduck.classList.add("blueFlyBack");
}, 14000);

blueduck.onclick = blueDead = () => {
  if (shots > 0) {
    deadduck();
    sini.innerHTML = "For the blue duck you used " + (3-shots) + " shots";
    shots = 0;
    one.style.backgroundPosition = "-25px -557px";
    clearTimeout(blueFlyBack);
    clearTimeout(blueFlyCor);
    blueduck.style.display = "none";
    laugh.style.display = "block";
    setTimeout(()=> {
      laugh.style.display = "none";
      laugh.style.left = "20%";
    },2000)
  }
};

/*MUSTA SORSA*/

setTimeout(()=>{
  blackduck.classList.add("blackFlyStr");
  blueduck.style.display = "none";
  shots = 3;
  first.style.display = "block";
  second.style.display = "block";
  third.style.display = "block";
},17000);

let blackFlyCor = setTimeout(()=>{
  blackduck.classList.add("blackFlyBack");
}, 20000);

let blackFlyBack = setTimeout(()=>{
  blackduck.classList.add("blackFlyCor");
}, 23000);

blackduck.onclick = blackDead = () => {
  if (shots > 0) {
    deadduck();
    must.innerHTML = "For the black duck you used " + (3-shots) + " shots";
    shots = 0;
    two.style.backgroundPosition = "-25px -557px";
    clearTimeout(blackFlyCor);
    clearTimeout(blackFlyBack);
    blackduck.style.display = "none";
    laugh.style.display = "block";
    setTimeout(()=> {
      laugh.style.display = "none";
      laugh.style.left = "55%";
    },2000)
  }
};

/*PUNAINEN SORSA*/

setTimeout(()=>{
  redduck.classList.add("redFlyStr1");
  blackduck.style.display = "none";
  shots = 3;
  first.style.display = "block";
  second.style.display = "block";
  third.style.display = "block";
},26000);

let redFlyCor = setTimeout(()=>{
  redduck.classList.add("redFlyCor");
}, 29000);

let redFlyBack = setTimeout(()=>{
  redduck.classList.add("redFlyBack");
}, 32000);

let redFlyStr2 = setTimeout(()=>{
  redduck.classList.add("redFlyStr2");
}, 35000);

let loppu = setTimeout(()=>{
  end();
  redduck.style.display = "none";
},38000);

redduck.onclick = redDead = () => {
  if (shots > 0) {
    deadduck();
    puna.innerHTML = "For the red duck you used " + (3-shots) + " shots";
    shots = 0;
  three.style.backgroundPosition = "-25px -557px";
  clearTimeout(redFlyCor);
  clearTimeout(redFlyBack);
  clearTimeout(redFlyStr2);
  redduck.style.display = "none";
    laugh.style.display = "block";
    setTimeout(()=> {
      laugh.style.display = "none";
    },8000);
  end();
  clearTimeout(loppu);
  }
};

const deadduck = () => {
  shooting();
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "none";
  shots--;
  deads++;
};