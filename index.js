const questions = [
  [
    "",
    "Do you like salt?",
    "So, you LOVE salt?",
    "You love it SO much you shake TONS on everything you eat?",
    "Even at the risk of high blood pressure, heart disease, and stroke?",
  ],
  [
    "",
    "So, you HATE salt?",
    "You never add it to ANYTHING at all?",
    "You insist that NO salt goes in any food you eat?",
    "You'd avoid salt even at the risk of hyponatremia?",
  ],
];

var likesSalt;
const enough = "ENOUGH!";
var counter0;
var counter1;

document.getElementById("div").addEventListener("load", forStarters());

function createLabel() {
  var label = document.createElement("LABEL");
  var t = document.createTextNode(questions[0][counter0]);
  label.appendChild(t);
  label.setAttribute("id", "question");
  label.setAttribute("for", "yesno");
  document.getElementById("div1").appendChild(label);
}

function createSelect() {
  var yesno = document.createElement("SELECT");
  yesno.setAttribute("id", "yesno");
  document.getElementById("div1").appendChild(yesno);
  createOptions();
}

function createDivs() {
  var div1 = document.createElement("DIV");
  div1.setAttribute("id", "div1");
  document.getElementById("div").appendChild(div1);
  var div2 = document.createElement("DIV");
  div2.setAttribute("id", "div2");
  document.getElementById("div").appendChild(div2);
}

function createOptions() {
  var yes = document.createElement("option");
  yes.setAttribute("value", "yes");
  var t = document.createTextNode("YES");
  yes.appendChild(t);
  document.getElementById("yesno").appendChild(yes);
  var no = document.createElement("option");
  no.setAttribute("value", "no");
  t = document.createTextNode("NO");
  no.appendChild(t);
  document.getElementById("yesno").appendChild(no);
}

function createSubmitButton() {
  var submit = document.createElement("BUTTON");
  submit.id = "submit";
  let t = document.createTextNode("SUBMIT");
  submit.appendChild(t);
  document.getElementById("div2").appendChild(submit);
  document.getElementById("submit").addEventListener("click", process);
}

function createDoneButton() {
  var doneButton = document.createElement("BUTTON");
  doneButton.id = "done";
  let t = document.createTextNode(enough);
  doneButton.appendChild(t);
  document.getElementById("div2").appendChild(doneButton);
  document.getElementById("done").addEventListener("click", done);
}

function createPara(msg) {
  let p = document.createElement("p");
  p.innerText = msg;
  p.id = "msg";
  document.getElementById("div1").appendChild(p);
}

function createRefreshButton() {
  let button = document.createElement("BUTTON");
  button.id = "refresh";
  let t = document.createTextNode("Try Again?");
  button.appendChild(t);
  document.getElementById("div2").appendChild(button);
  document.getElementById("refresh").onclick = forStarters;
}

function forStarters() {
  counter0 = 1;
  counter1 = 0;
  likesSalt = true;
  clearDiv();
  createDivs();
  createLabel();
  createSelect();
  createSubmitButton();
  createDoneButton();
}

function clearDiv() {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function process() {
  var select = document.getElementById("yesno");
  var value = select.options[select.selectedIndex].value;
  if (likesSalt) {
    if (value == "yes") {
      setLikes();
    } else {
      setHates();
    }
  } else {
    if (value == "yes") {
      setHates();
    } else {
      setLikes();
    }
  }
}

function setLikes() {
  if (counter0 < questions[0].length - 1) {
    counter1 = 0;
    counter0++;
    document.getElementById("question").innerHTML = questions[0][counter0];
    likesSalt = true;
    document.getElementById("yesno").selectedIndex = 0;
  } else {
    done(1);
  }
}

function setHates() {
  if (counter1 < questions[1].length - 1) {
    counter0 = 0;
    counter1++;
    document.getElementById("question").innerHTML = questions[1][counter1];
    likesSalt = false;
    document.getElementById("yesno").selectedIndex = 0;
  } else {
    done(1);
  }
}

function done(complete) {
  clearDiv();
  var msg = "Sometimes, you really need more than 2 choices!";
  if (complete == 1) {
    msg = `You REALLY ${likesSalt ? "love" : "hate"} your salt!`;
  }

  createDivs();
  createPara(msg);
  createRefreshButton();
}
