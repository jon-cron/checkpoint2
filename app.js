const items = [
  {
    name: "banana",
    id: 0,
    value: 5,
    img: "https://media2.giphy.com/media/3oEjI3ZMHUCvrSH0U8/giphy.gif",
    qty: 0,
  },
  {
    name: "coffee",
    id: 1,
    value: 1,
    img: "https://media.tenor.com/2Wu29iaHSYYAAAAj/coffee-lover-hot-coffee.gif",
    qty: 1,
  },

  {
    name: "coconut",
    id: 2,
    value: 10,
    img: "https://media0.giphy.com/media/45bu94XmXKbqN6Fz70/giphy.gif?cid=6c09b952e4ouy6jcrdvtyin2vhpw7z5rg4kpkj6519ydktn2&rid=giphy.gif&ct=s",
    qty: 0,
  },
];
let money = 0;
let startCount = 0;

let timesClicked = 0;
function drawTimesClicked() {
  timesClicked += 1;
  document.getElementById("timesClicked").innerText = timesClicked;
}

function itemSelect(blank) {
  let item = items.find((i) => i.id == blank);
  money += item.value;
  console.log(money);
  drawMoney();
  let currentTotal = 0;
  currentTotal = item.value;
  document.getElementById("currentTotal").innerText = currentTotal;
}
// function drawClick()
// let click = 0
// if(itemSelect(0)){
//   console.log(0)
// }
// if(itemSelect(1)){
//   console.log(1)
// }
// if(itemSelect(2)){
//   console.log(2)
// }

function drawMoney() {
  document.getElementById("money").innerText = money;
}

let btn1Price = 100;
function button1() {
  if (money < btn1Price) {
    window.alert("you too broke");
  }
  if (money >= btn1Price) {
    money -= btn1Price;
    let item = items.find((i) => i.name == "coffee");
    item.value += 2;
    console.log(item.name, item.value);
    btn1Price += 200;
    drawBtnPrice();
    drawTimesClicked();
  }
  drawMoney();
  // drawClickValue();
}
function drawBtnPrice() {
  btn1Price;
  document.getElementById("btnCost").innerText = btn1Price;
}
// function button2() {
//   if (money < 500) {
//     window.alert("you too broke");
//   }
//   if (money >= 500) {
//     money -= 500;

//     drawInterval();
//     setInterval(coffeeHelper, 3000);

//     document.getElementById("btn3").classList.add("hidden");
//   }
//   drawMoney();
//   // drawClickValue();
// }
function drawInterval() {
  document.getElementById("intervalMoney").innerText = "5";
}
function bananaHelper() {
  let item = items.find((i) => i.id == 0);
  money += item.value;
  drawMoney();
  drawInterval(item);
}

function button3() {
  if (money < 1000) {
    window.alert("you too broke");
  }
  if (money >= 1000) {
    money -= 1000;
    let item = items.find((i) => i.name == "banana");
    item.qty++;
    console.log(item.name, item.qty);
    if (item.qty > 0) {
      document.getElementById("button3").classList.add("hidden");
      document.getElementById("button4").classList.remove("hidden");
    }
  }
  drawMoney();
  drawItems();
}
function button4() {
  if (money < 500) {
    window.alert("you too broke");
  }
  if (money >= 500) {
    money -= 500;
    document.getElementById("button4").classList.add("hidden");

    setInterval(bananaHelper, 3000);
  }
  drawMoney();
}

function button5() {
  if (money < 10000) {
    window.alert("you too broke");
  }
  if (money >= 10000) {
    money -= 10000;
    let item = items.find((i) => i.name == "coconut");
    item.qty++;
    console.log(item.name, item.qty);
    if (item.qty > 0) {
      document.getElementById("button5").classList.add("hidden");
      document.getElementById("button6").classList.remove("hidden");
    }
  }
  drawMoney();
  drawItems();
}

function drawItems() {
  let template = "";
  items.forEach((i) => {
    if (i.qty > 0) {
      console.log(i.name);
      template += `<div onclick = "itemSelect(${i.id})" class= "text-center text-light btn"><h1>${i.name}</h1>
      <div><img src="${i.img}" alt=""></div></div>`;
    }
    document.getElementById("items").innerHTML = template;
  });
}
// function drawClickValue(){

//   let currentTotal = 0;
//   if(itemSelect(blank)){
//     currentTotal = blank.value

//     document.getElementById("currentTotal").innerText = currentTotal;
//   }

// function drawClickValue() {
//   let coffee = items.find((i) => i.name == "coffee");
//   let banana = items.find((i) => i.name == "banana");
//   let coconut = items.find((i) => i.name == "coconut");
//   let currentTotal = coffee.value;
//   if (banana.qty > 0) {
//     currentTotal += banana.value;
//     if (coconut.qty > 0) {
//       currentTotal += coconut.value;
//     }
//   }
//   document.getElementById("currentTotal").innerText = currentTotal;
// }
drawMoney();
drawItems();
// drawClickValue();
