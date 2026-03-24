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

function processText() {
  let text = document.getElementById("input").value;

  if (document.getElementById("emptyLine").checked) {
    text = text.replace(/^\s*[\r\n]/gm, "");
  }

  if (document.getElementById("lineBreak").checked) {
    text = text.replace(/\n/g, "");
  }

  if (document.getElementById("punct").checked) {
    text = text.replace(/、/g, ",").replace(/。/g, ".");
  }

  if (document.getElementById("lower").checked) {
    text = text.toLowerCase();
  }

  document.getElementById("output").value = text;
}