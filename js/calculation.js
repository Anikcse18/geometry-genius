// Traingle
document
  .getElementById("triangle_click")
  .addEventListener("click", function () {
    var base = getInputFieldValuebyId("base");
    var height = getInputFieldValuebyId("height");
    var traingleAreaCalculation = 0.5 * heighttimeswidth(base, height);
    setTextElementById("traingle_area", traingleAreaCalculation);
  });

// Rectaingel
document
  .getElementById("rectaingleArea")
  .addEventListener("click", function () {
    var wide = getInputFieldValuebyId("wide");
    var length = getInputFieldValuebyId("length");
    var rectaingelAreaCalculation = heighttimeswidth(wide, length);
    setTextElementById("rectaingle_area", rectaingelAreaCalculation);
  });

// Parallelogram
document
  .getElementById("parallelogramArea")
  .addEventListener("click", function () {
    var wide_p = getInputFieldValuebyId("wide_p");
    var length_p = getInputFieldValuebyId("length_p");
    var parallelogramAreaCalculation = heighttimeswidth(wide_p * length_p);

    setTextElementById("parallelogram_area", parallelogramAreaCalculation);
  });

//RhombousArea
document.getElementById("rhombusArea").addEventListener("click", function () {
  var d1 = getInputFieldValuebyId("d1");
  var d2 = getInputFieldValuebyId("d2");
  var rhombousAreaCalculation = 0.5 * heighttimeswidth(d1, d2);

  setTextElementById("rhombus_area", rhombousAreaCalculation);
});

// Pentagone

document.getElementById("pentagonArea").addEventListener("click", function () {
  var p = getInputFieldValuebyId("p");
  var b = getInputFieldValuebyId("b");
  var pentagoneAreaCalculation = 0.5 * heighttimeswidth(p, b);

  setTextElementById("pentagon_area", pentagoneAreaCalculation);
});

//ellipse
document.getElementById("ellipseArea").addEventListener("click", function () {
  var a = getInputFieldValuebyId("a");
  var b_e = getInputFieldValuebyId("b_e");
  var ellipseAreaCalculation = 3.1416 * heighttimeswidth(a,b_e);

  setTextElementById("ellipse_area", ellipseAreaCalculation);
});
