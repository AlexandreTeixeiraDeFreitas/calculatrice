import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// `;
let button = document.getElementsByClassName("calc_btn");
console.log(button);
let value = null;
let op = null;
let nb1 = null;
let nb2 = null;
let click = null;
let virgule = null;
button[0].addEventListener("click", (event) => {
  value = null;
  op = null;
  nb1 = null;
  nb2 = null;
  click = null;
  virgule = null;
  document.getElementById("calc_resultat").value = null;
});

button[1].addEventListener("click", (event) => {
  click = "%";
  op = click;
});

button[2].addEventListener("click", (event) => {
  click = "+";
  op = click;
});

button[3].addEventListener("click", (event) => {
  click = 7;
  console.log(op);

  if (op != null && nb1 == null) {
    value = document.getElementById("calc_resultat").value;
    nb1 = value;
    value = null;
    virgule = null;
    document.getElementById("calc_resultat").value = null;
  }
  value = document.getElementById("calc_resultat").value;
  if (virgule != null) {
    if (virgule !== "util") {
      value = value + ".";
      virgule = "util";
    }
  }
  document.getElementById("calc_resultat").value = value + click;
  value = value + click;
});

button[4].addEventListener("click", (event) => {
  click = 8;

  if (op != null && nb1 == null) {
    value = document.getElementById("calc_resultat").value;
    nb1 = value;
    value = null;
    virgule = null;
    document.getElementById("calc_resultat").value = null;
  }
  value = document.getElementById("calc_resultat").value;
  if (virgule != null) {
    if (virgule !== "util") {
      value = value + ".";
      virgule = "util";
    }
  }
  document.getElementById("calc_resultat").value = value + click;
  value = value + click;
});

button[5].addEventListener("click", (event) => {
  click = 9;
  if (op != null && nb1 == null) {
    value = document.getElementById("calc_resultat").value;
    nb1 = value;
    value = null;
    virgule = null;
    document.getElementById("calc_resultat").value = null;
  }
  value = document.getElementById("calc_resultat").value;
  if (virgule != null) {
    if (virgule !== "util") {
      value = value + ".";
      virgule = "util";
    }
  }
  document.getElementById("calc_resultat").value = value + click;
  value = value + click;
});

button[6].addEventListener("click", (event) => {
  click = "-";
  op = click;
});

button[7].addEventListener("click", (event) => {
  click = 4;
  if (op != null && nb1 == null) {
    value = document.getElementById("calc_resultat").value;
    nb1 = value;
    value = null;
    virgule = null;
    document.getElementById("calc_resultat").value = null;
  }
  value = document.getElementById("calc_resultat").value;
  if (virgule != null) {
    if (virgule !== "util") {
      value = value + ".";
      virgule = "util";
    }
  }
  document.getElementById("calc_resultat").value = value + click;
  value = value + click;
});

button[8].addEventListener("click", (event) => {
  click = 5;
  if (op != null && nb1 == null) {
    value = document.getElementById("calc_resultat").value;
    nb1 = value;
    value = null;
    virgule = null;
    document.getElementById("calc_resultat").value = null;
  }
  value = document.getElementById("calc_resultat").value;
  if (virgule != null) {
    if (virgule !== "util") {
      value = value + ".";
      virgule = "util";
    }
  }
  document.getElementById("calc_resultat").value = value + click;
  value = value + click;
});

button[9].addEventListener("click", (event) => {
  click = 6;
  if (op != null && nb1 == null) {
    value = document.getElementById("calc_resultat").value;
    nb1 = value;
    value = null;
    virgule = null;
    document.getElementById("calc_resultat").value = null;
  }
  value = document.getElementById("calc_resultat").value;
  if (virgule != null) {
    if (virgule !== "util") {
      value = value + ".";
      virgule = "util";
    }
  }
  document.getElementById("calc_resultat").value = value + click;
  value = value + click;
});

button[10].addEventListener("click", (event) => {
  click = "X";
  op = click;
});

button[11].addEventListener("click", (event) => {
  click = 1;
  if (op != null && nb1 == null) {
    value = document.getElementById("calc_resultat").value;
    nb1 = value;
    value = null;
    virgule = null;
    document.getElementById("calc_resultat").value = null;
  }
  value = document.getElementById("calc_resultat").value;
  if (virgule != null) {
    if (virgule !== "util") {
      value = value + ".";
      virgule = "util";
    }
  }
  document.getElementById("calc_resultat").value = value + click;
  value = value + click;
});

button[12].addEventListener("click", (event) => {
  click = 2;
  if (op != null && nb1 == null) {
    value = document.getElementById("calc_resultat").value;
    nb1 = value;
    value = null;
    virgule = null;
    document.getElementById("calc_resultat").value = null;
  }
  value = document.getElementById("calc_resultat").value;
  if (virgule != null) {
    if (virgule !== "util") {
      value = value + ".";
      virgule = "util";
    }
  }
  document.getElementById("calc_resultat").value = value + click;
  value = value + click;
});

button[13].addEventListener("click", (event) => {
  click = 3;
  if (op != null && nb1 == null) {
    value = document.getElementById("calc_resultat").value;
    nb1 = value;
    value = null;
    virgule = null;
    document.getElementById("calc_resultat").value = null;
  }
  value = document.getElementById("calc_resultat").value;
  if (virgule != null) {
    if (virgule !== "util") {
      value = value + ".";
      virgule = "util";
    }
  }
  document.getElementById("calc_resultat").value = value + click;
  value = value + click;
});

button[14].addEventListener("click", (event) => {
  click = "/";
  op = click;
});

button[15].addEventListener("click", (event) => {
  click = 0;
  if (op != null && nb1 == null) {
    value = document.getElementById("calc_resultat").value;
    nb1 = value;
    value = null;
    virgule = null;
    document.getElementById("calc_resultat").value = null;
  }
  value = document.getElementById("calc_resultat").value;
  if (virgule != null) {
    if (virgule !== "util") {
      value = value + ".";
      virgule = "util";
    }
  }
  document.getElementById("calc_resultat").value = value + click;
  value = value + click;
});

button[16].addEventListener("click", (event) => {
  if (virgule !== "util") {
    click = ".";
    virgule = click;
  }
});

button[17].addEventListener("click", (event) => {
  nb2 = value;
  console.log(op);

  if (op === "+") {
    value = parseFloat(nb1) + parseFloat(nb2);
  }
  if (op === "-") {
    value = parseFloat(nb1) - parseFloat(nb2);
  }
  if (op === "X") {
    value = parseFloat(nb1) * parseFloat(nb2);
  }
  if (op === "/") {
    value = parseFloat(nb1) / parseFloat(nb2);
  }
  if (op === "%") {
    value = (nb1 / (nb2 + nb1)) * 100;
    value = 100 - value;
  }
  document.getElementById("calc_resultat").value = value;
  op = null;
  nb1 = null;
  nb2 = null;
  click = null;
  virgule = null;
});
