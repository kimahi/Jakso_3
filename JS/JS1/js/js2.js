const p = document.getElementById("vastaus");
nappi = document.getElementById("nappi");

nappi.addEventListener("click", function() {
  let a = document.getElementById("luku1").value;
  let b = document.getElementById("luku2").value;
  let c = b % a;

  c = gcd(a, b, c);
  siev(a, b, c);
});

const gcd = (a, b, c) => {
  while(c!==0) {
    c = b % a;
    b = a;
    a = c;
  }
  c = b;
  p.innerHTML = "Suurin yhteinen tekijä on " + c;
  return c;
};

const siev = (a, b, c) => {
  a = a / c;
  b= b / c;
  p.innerHTML += '<br>Sievennetty: ' + a + '/' + b;
};

