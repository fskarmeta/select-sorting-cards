// All card Numbers in numeric
let cardN = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Al card Types
let cardT = ["hearts", "spades", "clubs", "diamond"];

// Random item from array
let r = (arr) => Math.floor(Math.random() * arr.length);

// Function From Numeric to String for J,Q,K,A when paired in Array
function cardSort(arr) {
  return arr.map((e) =>
    e[0] === 11
      ? (e = ["J", e[1]])
      : e[0] === 12
      ? (e = ["Q", e[1]])
      : e[0] === 13
      ? (e = ["K", e[1]])
      : e[0] === 14
      ? (e = ["A", e[1]])
      : e
  );
}

// Single num to String Function for J,Q,K,A

function numberSort(n) {
  switch (n) {
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    case 14:
      return "A";
    default:
      return n;
  }
}
//  JDOM

let drawButton = document.querySelector(".draw");
let container = document.querySelector(".display");

var newArr = [];
let display;

drawButton.addEventListener("click", (e) => {
  let sorting = document.querySelectorAll(".rowDiv");
  for (let p of sorting) {
    p.innerHTML = "";
  }
  container.innerHTML = "";

  let amount = document.getElementById("input").value;
  newArr = [];

  if (parseInt(amount) > 30) {
    alert("Number is to high");
  } else {
    for (let i = 1; i <= parseInt(amount); i++) {
      let cardNumber = cardN[r(cardN)];
      let cardType = cardT[r(cardT)];
      newArr.push([cardNumber, cardType]);
    }
  }

  display = cardSort(newArr);

  for (let j = 0; j < display.length; j++) {
    let div = document.createElement("div");

    div.innerHTML +=
      '<div class="card mx-1"><div class="row top"><div class="col-md-12 d-flex justify-content-start icon1"><span class="icon ' +
      display[j][1] +
      '">&' +
      display[j][1] +
      ";</span><div></div></div></div>" +
      '<div class="row middle"><div class="col-md-12 d-flex justify-content-center align-items-center numberP"><p class="number ' +
      display[j][1] +
      '">' +
      display[j][0] +
      "</p></div></div>" +
      '<div class="row bot"><div class="col-md-12 d-flex justify-content-end align-items-end icon2"><span class="icon ' +
      display[j][1] +
      '">&' +
      display[j][1] +
      ";</span></div></div></div>";

    container.appendChild(div);
  }
});

let fluid = document.querySelector(".container-fluid");

let sortButton = document.querySelector(".sort");

let logy = document.querySelector(".logy");

const selectSort = (arr) => {
  let min = 0;
  let counter = 0;
  while (min < arr[arr.length - 1][0]) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min][0] > arr[i][0]) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
        let newDiv = document.createElement("div");
        newDiv.classList.add("rowDiv");
        newDiv.classList.add("row");

        let spam = document.createElement("span");
        spam.classList.add("iteracion");
        spam.innerHTML = "<p>" + counter + "</p>";

        newDiv.appendChild(spam);

        for (let e of arr) {
          newDiv.innerHTML +=
            '<div class="card mx-1 my-2"><div class="row top"><div class="col-md-12 d-flex justify-content-start icon1"><span class="icon ' +
            e[1] +
            '">&' +
            e[1] +
            ";</span><div></div></div></div>" +
            '<div class="row middle"><div class="col-md-12 d-flex justify-content-center align-items-center numberP"><p class="number ' +
            e[1] +
            '">' +
            numberSort(e[0]) +
            "</p></div></div>" +
            '<div class="row bot"><div class="col-md-12 d-flex justify-content-end align-items-end icon2"><span class="icon ' +
            e[1] +
            '">&' +
            e[1] +
            ";</span></div></div>";

          fluid.appendChild(newDiv);
        }
        counter++;
      }
    }
    min++;
  }
  return arr;
};

sortButton.addEventListener("click", (e) => {
  selectSort(newArr);
});
