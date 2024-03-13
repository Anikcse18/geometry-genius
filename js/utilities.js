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
