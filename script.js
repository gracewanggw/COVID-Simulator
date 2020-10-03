/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

var arr = [];
var name = "";
var chooseTrue = Array();
var chooseFalse = Array();
var peopleInEachPlace = [100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var covid = false;
var peopleInfected = 0;
var char = 1;

for (var i = 0; i < 11; i++) {
  chooseTrue.push(0.5);
  chooseTrue.push(0.05);
}

function getName(){
  name = document.getElementbyID("fname").value;
  console.log(name);
}

function click() {
  arr.push(1);
  console.log("clicked");
}

function calculate() {
  if (Math.random() > 0.5) covid = false;
  else covid = true;
  peopleInfected = Math.floor(Math.random()*200);
  for (var i = 0; i < arr.length; i++) {
    //if they chose the more covid-likely option
    if (arr[i] == 1) {
      if (!covid) {
        if ((Math.random() + 0.5) * chooseTrue[i] > 0.5) covid = true;
      } else {
        peopleInfected += peopleInEachPlace[i] * chooseTrue[i];
      }
    }
    //if they choose to stay home
    else if (arr[i] == 2) {
      if (!covid) {
        if ((Math.random() + 0.5) * chooseFalse[i] > 0.5) covid = true;
      }
    }
  }
}
