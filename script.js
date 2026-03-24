function removeLineBreaks() {
  let text = document.getElementById("input").value;
  document.getElementById("output").value = text.replace(/\n/g, "");
}

function removeEmptyLines() {
  let text = document.getElementById("input").value;
  document.getElementById("output").value = text.replace(/^\s*[\r\n]/gm, "");
}

function convertPunctuation() {
  let text = document.getElementById("input").value;
  text = text.replace(/、/g, ",").replace(/。/g, ".");
  document.getElementById("output").value = text;
}

function toLowerCaseText() {
  let text = document.getElementById("input").value;
  document.getElementById("output").value = text.toLowerCase();
}

function copyText() {
  let output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("コピーしました / Copied!");
}