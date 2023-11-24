// hamburger menu
document.getElementById("hamButton").addEventListener("click", function () {
  let hamMenu = document.getElementById("hamMenu");
  hamMenu.classList.toggle("hidden");
});

// button bahasa
function changeLanguage(language) {
  if (language === "en") {
    greetingElement.innerText = "Hello!";
    descriptionElement.innerText =
      "This is a simple language switcher example.";
  } 

  // bahasa indonesia
  else if (language === "id") {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // Parsing JSON
        let jsonData = JSON.parse(this.responseText);

        // Mengambil nilai h1 dari JSON
        let h1Value = jsonData.homepage.id.h1;
        let button1Value = jsonData.homepage.id.button1;
        let button2Value = jsonData.homepage.id.button2;

        // Menampilkan nilai h1 di elemen HTML
        let h1Element = document.getElementById("h1");
        let button1Element = document.getElementById("button1Text");
        let button2Element = document.getElementById("button2Text");

        h1Element.textContent = h1Value;
        button1Element.textContent = button1Value;
        button2Element.textContent = button2Value;

        // content page
        
      }
    };

    xhr.open("GET", "bahasa.json", true);
    xhr.send();
  }
}
