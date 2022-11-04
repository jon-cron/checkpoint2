const items = [
  {
    name: "banana",
    id: 0,
    value: 2,
    img: "https://media2.giphy.com/media/3oEjI3ZMHUCvrSH0U8/giphy.gif",
    qty: 1,
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
    value: 5,
    img: "https://media0.giphy.com/media/45bu94XmXKbqN6Fz70/giphy.gif?cid=6c09b952e4ouy6jcrdvtyin2vhpw7z5rg4kpkj6519ydktn2&rid=giphy.gif&ct=s",
    qty: 1,
  },
];
let money = 0;
let startCount = 0;

function itemSelect(blank) {
  let item = items.find((i) => i.id == blank);
  money += item.value;
  console.log(money);
  drawMoney();
}

function drawMoney() {
  document.getElementById("money").innerText = money;
}
function drawCounter() {
  startCount++;
}
function button1(name) {
  items.find((i) => i.name == name);
  i.value * 2;
}

function drawItems() {
  let template = "";
  items.forEach((i) => {
    if (i.qty > 0) {
      console.log(i.name);
      template += `<div onclick = "itemSelect(${i.id})" class= "text-center btn"><h1>${i.name}</h1>
      <div><img src="${i.img}" alt=""></div></div>`;
    }
    document.getElementById("items").innerHTML = template;
  });
}
drawItems();
