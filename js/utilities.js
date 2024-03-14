function getInputFieldValuebyId(idpass) {
  var input_value = document.getElementById(idpass);
  var inputFieldValue = parseFloat(input_value.value);
  input_value.value = "";
  return inputFieldValue;
}

function setTextElementById(textId, newValue) {
  const textIdField = document.getElementById(textId);
  textIdField.innerHTML = newValue;
}
function heighttimeswidth(width, height) {
  return width * height;
}

function calculatioEntry(shapeName, areaVale) {
  var calculationEntry = document.getElementById("calculationEntry");
  var p = document.createElement("p");
  var count = calculationEntry.childElementCount;

  p.innerHTML = `${count + 1}. ${shapeName} ${areaVale} cm<sup>2<sup> `;
  calculationEntry.appendChild(p);
}
