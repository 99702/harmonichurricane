const e_button = document.getElementById("e");
const B_button = document.getElementById("b");
const G_button = document.getElementById("g");
const D_button = document.getElementById("d");
const A_button = document.getElementById("a");
const E_button = document.getElementById("E");

e = ["e", "f", "g"];
b = ["B", "c", "d"];
g = ["G", "A"];
d = ["D", "E", "F"];
a = ["A,", "B,", "C"];
E = ["E,", "F,", "G,"];
function generate(arr) {
  if(arr == '' || arr == null || arr == undefined || arr.length == 0){
    all = ["e", "f", "g", "B", "c", "d", "G", "A", "D", "E", "F", "A,", "B,", "C", "E,", "F,", "G,"]
    return all[Math.floor(Math.random() * all.length)];
  }
  return arr[Math.floor(Math.random() * arr.length)];
}
function renderABC() {
  // const abcNotation = `X:1\nK:C\nL:1/4\n\T: Harmonic Hurricane ${generate([])}`;
  const abcNotation = `X:1\nK:C\nL:1/4\n\T: Harmonic Hurricane
    ${generate(e)} ${generate(b)} ${generate(g)} ${generate(d)}\
  ${generate(a)} ${generate(E)}`;
  document.getElementById("abc-render").innerHTML = "";
  ABCJS.renderAbc("abc-render", abcNotation, {
    responsive: "resize" 

  });
}

renderABC();

setInterval(renderABC, 5000);

function changeAllNotesTo(str) {
  if (str == "e") {
    e = ["e", "f", "g"];
    b = ["e", "f", "g"];
    g = ["e", "f", "g"];
    d = ["e", "f", "g"];
    a = ["e", "f", "g"];
    E = ["e", "f", "g"];
  } else if (str == "b") {
    e = ["B", "c", "d"];
    b = ["B", "c", "d"];
    g = ["B", "c", "d"];
    d = ["B", "c", "d"];
    a = ["B", "c", "d"];
    E = ["B", "c", "d"];
  } else if (str == "g") {
    e = ["G", "A"];
    b = ["G", "A"];
    g = ["G", "A"];
    d = ["G", "A"];
    a = ["G", "A"];
    E = ["G", "A"];
  } else if (str == "d") {
    e = ["D", "E", "F"];
    b = ["D", "E", "F"];
    g = ["D", "E", "F"];
    d = ["D", "E", "F"];
    a = ["D", "E", "F"];
    E = ["D", "E", "F"];
  } else if (str == "a") {
    e = ["A,", "B,", "C"];
    b = ["A,", "B,", "C"];
    g = ["A,", "B,", "C"];
    d = ["A,", "B,", "C"];
    a = ["A,", "B,", "C"];
    E = ["A,", "B,", "C"];
  } else if (str == "E") {
    e = ["E,", "F,", "G,"];
    b = ["E,", "F,", "G,"];
    g = ["E,", "F,", "G,"];
    d = ["E,", "F,", "G,"];
    a = ["E,", "F,", "G,"];
    E = ["E,", "F,", "G,"];
  }
}
