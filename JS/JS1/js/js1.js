let BMI;
p = document.getElementById("vastaus");
nappi = document.getElementById("nappi");

nappi.addEventListener("click", function() {
  let pituus = document.getElementById("pituus").value;
  let paino = document.getElementById("paino").value;

  pituus = pituus / 100;

  BMI = paino/pituus/pituus;
  console.log(typeof BMI);
  if (isNaN(BMI)) {
    alert("Toinen syöttämistäsi arvoista ei ole numero!");
    return undefined;
  } else {
    p.innerHTML = "Painoindeksi on " + BMI.toFixed(2);
  }
});
