const id = document.getElementById("IDLang");

id.addEventListener("click", function () {
  // Lakukan request untuk membaca file JSON
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Parsing JSON
      let jsonData = JSON.parse(this.responseText);

      // Mengambil nilai dari JSON
      let h1Value = jsonData.h1;
      let descriptionValue = jsonData.description;
      let buttonLinearValue = jsonData.buttonLinear;
      let buttonQuadraticValue = jsonData.buttonQuadratic;
      let buttonCubicValue = jsonData.buttonCubic;
      let buttonTrigonometricValue = jsonData.buttonLinear;
      let buttonExponentialValue = jsonData.buttonExponential;
      let buttonLogarithmicValue = jsonData.buttonLogarithmic;


      // Menampilkan nilai di HTML
      let h1Element = document.getElementById("h1");
      let descriptionElement = document.getElementById("description");
      let buttonLinearElement = document.getElementById("buttonLinear");
      let buttonQuadraticElement = document.getElementById("buttonQuadratic");
      let buttonCubicElement = document.getElementById("buttonCubic");
      let buttonTrigonometricElement = document.getElementById("buttonTrigonometric");
      let buttonExponentialElement = document.getElementById("buttonExponential");
      let buttonLogarithmicElement = document.getElementById("buttonLogarithmic");


      h1Element.textContent = h1Value;
      descriptionElement.textContent = descriptionValue;
      buttonLinearElement.textContent = buttonLinearValue;
      buttonQuadraticElement.textContent = buttonQuadraticValue;
      buttonCubicElement.textContent = buttonCubicValue;
      buttonTrigonometricElement.textContent = buttonTrigonometricValue;
      buttonExponentialElement.textContent = buttonExponentialValue;
      buttonLogarithmicElement.textContent = buttonLogarithmicValue;

    }
  };

  xhr.open("GET", "idContentPage.json", true);
  xhr.send();
});
