// Traingle
document
  .getElementById("triangle_click")
  .addEventListener("click", function () {
    var base = getInputFieldValuebyId("base");
    var height = getInputFieldValuebyId("height");

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
      alert("Pls put the right input");
    } else {
      var traingleAreaCalculation = 0.5 * heighttimeswidth(base, height);
      setTextElementById("traingle_area", traingleAreaCalculation);
      // calculation log
      calculatioEntry("Traingle", traingleAreaCalculation);
    }
  });

// Rectaingel
document
  .getElementById("rectaingleArea")
  .addEventListener("click", function () {
    var wide = getInputFieldValuebyId("wide");
    var length = getInputFieldValuebyId("length");
    if (isNaN(wide) || isNaN(length) || wide <= 0 || length <= 0) {
      alert("Pls put the right input");
    } else {
      var rectaingelAreaCalculation = heighttimeswidth(wide, length);
      setTextElementById("rectaingle_area", rectaingelAreaCalculation);

      // calculation log
      calculatioEntry("Rectaingel", rectaingelAreaCalculation);
    }
  });

// Parallelogram
document
  .getElementById("parallelogramArea")
  .addEventListener("click", function () {
    var wide_p = getInputFieldValuebyId("wide_p");
    var length_p = getInputFieldValuebyId("length_p");
    if (isNaN(wide_p) || isNaN(length_p) || wide_p <= 0 || length_p <= 0) {
      alert("Pls put the right input");
    } else {
      var parallelogramAreaCalculation = heighttimeswidth(wide_p, length_p);

      setTextElementById("parallelogram_area", parallelogramAreaCalculation);
      // calculation log
      calculatioEntry("Parallelogram", parallelogramAreaCalculation);
    }
  });

//RhombousArea
document.getElementById("rhombusArea").addEventListener("click", function () {
  var d1 = getInputFieldValuebyId("d1");
  var d2 = getInputFieldValuebyId("d2");
  if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
    alert("Pls put the right input");
  } else {
    var rhombousAreaCalculation = 0.5 * heighttimeswidth(d1, d2);

    setTextElementById("rhombus_area", rhombousAreaCalculation);

    // calculation log
    calculatioEntry("Rhombous", rhombousAreaCalculation);
  }
});

// Pentagone

document.getElementById("pentagonArea").addEventListener("click", function () {
  var p = getInputFieldValuebyId("p");
  var b = getInputFieldValuebyId("b");
  if (isNaN(p) || isNaN(b) || p <= 0 || b <= 0) {
    alert("Pls put the right input");
  } else {
    var pentagoneAreaCalculation = 0.5 * heighttimeswidth(p, b);

    setTextElementById("pentagon_area", pentagoneAreaCalculation);

    // calculation log
    calculatioEntry("Pentagone", pentagoneAreaCalculation);
  }
});

//ellipse
document.getElementById("ellipseArea").addEventListener("click", function () {
  var a = getInputFieldValuebyId("a");
  var b_e = getInputFieldValuebyId("b_e");

  if (isNaN(a) || isNaN(b_e) || a <= 0 || b_e <= 0) {
    alert("Pls put the right input");
  } else {
    var ellipseAreaCalculation = 3.1416 * heighttimeswidth(a, b_e);
    ellipseAreaCalculation = ellipseAreaCalculation.toFixed(2);

    setTextElementById("ellipse_area", ellipseAreaCalculation);
    // calculation log
    calculatioEntry("Ellipse", ellipseAreaCalculation);
  }
});
