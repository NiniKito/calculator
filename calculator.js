function func(inp) {
  document.getElementById("inputvalue").value += inp;
}

function Result() {
  var x = document.getElementById("inputvalue").value;
  var y = eval(x);
  document.getElementById("inputvalue").value = y;
}

function Clear() {
  document.getElementById("inputvalue").value = "";
}
