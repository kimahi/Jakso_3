const low = 1;
const high = 40;
let count = 7;
let a = [];

const drawNumber = (low, high) => {
  let luku = Math.floor(Math.random() * high) + low;
  return luku;
};

const valueIsIn = (a, v) => {
  for (let i=0; i<=a.length; i++) {
    if (a[i]===v) {
      return true;
    }
    else if (i===a.length) {
      return false;
    }
  }
};

const drawNumbers = (low, high, count) => {
  for (let j=1; j<=count; j++) {
    let v = drawNumber(low, high);
    if (j===1) {
      a.push(v);
    }
    else if (valueIsIn(a, v)===false) {
      a.push(v);
    }
    else if (valueIsIn(a, v)===true) {
      j--;
    }
  }
  return a;
};

/*
nappi = document.getElementById("nappi");
nappi.addEventListener("click", function() {
  const lotto = drawNumbers(low, high, count);

  lotto.sort((x,b)=>{return x - b});

  return lotto;
  const p = document.getElementsByTagName("p")[0];
  p.innerHTML = "Numerot " + lotto;
});
*/





arvonta = document.getElementById("lotto");
arvonta.addEventListener("click", function() {
  a = [];
  let lista = [];
  for (let y=0; y<=count-1; y++) {
    num = document.getElementsByTagName("input")[y].value;
    lista.push(num);
  }
  numbersLegal(lista, low, high);

  const lotto = drawNumbers(low, high, count);
  lotto.sort((x,b)=>{return x - b});

  let oikein = 0;
  //console.log("koneen numerot on " + lotto);
  //console.log("lista on " + lista);
  for (let i=0; i<=count-1; i++) {
    for (let j=0; j<=count-1; j++) {
      //console.log("lotto on " + lotto[i] + "     lista on " + lista[j]);
      //console.log(lotto[i]==lista[j]);
      if (lista[j]==a[i]) {
        oikein++;
      }
    }

  }
  const p2 = document.getElementsByTagName("p")[0];
  p2.innerHTML = "Numeroita oikein: " + oikein;
});

const valuesInRange = (a, low, high) => {

  let totta = 0;
  for (let i=0; i<=count-1; i++) {
   if (a[i]<=high && a[i]>=low) {
     totta++;
   }
  }
  if (totta===7) {
    console.log("valuesInRange true");
    return true;
  } else {
    console.log("valuesInRange false");
    return false;
  }
};

const valuesUnique = (a) => {
  let x = 0;
  for(let i=0; i<=count-1; i++) {
    for (let j=1+x; j<=count-1; j++) {
      if (a[i]===a[j]) {
        console.log("valuesUnique false");
        return false;
      }
    }
    x++;
  }
  console.log("valuesUnique true");
  return true;
};

const numbersLegal = (a, low, high) => {
  if (valuesInRange(a, low, high)===true && valuesUnique(a)===true) {
    console.log("numbersLegal true");
    return true;
  } else {
    console.log("numbersLegal false");
    return false;
  }
};