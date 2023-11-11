// hamburger menu
document.getElementById("hamButton").addEventListener("click", function () {
  var hamMenu = document.getElementById("hamMenu");
  hamMenu.classList.toggle("hidden");
});

// solve vutton
function plotGraph() {
  if (
    document.getElementById("inputA").value === "" ||
    document.getElementById("inputB").value === ""
  ) {
    alert("input value cannot be empty");
  } else if (document.getElementById("inputA").value === "0") {
    alert("a value cannot be 0");
  } else {
    // Ambil nilai a dan b dari input
    let a = document.getElementById("inputA").valueAsNumber;
    let b = document.getElementById("inputB").valueAsNumber;

    // Hapus grafik sebelumnya jika ada
    if (chart !== null) {
      chart.destroy();
    }

    // Buat data untuk grafik linear
    let data = {
      labels: [],
      datasets: [
        {
          label: `f(x) = ${(document.getElementById("aExpression").innerText =
            inputA.value + "x")}${(document.getElementById(
            "bExpression"
          ).innerText = "+" + inputB.value)}`,
          borderColor: "rgb(75, 192, 192)",
          data: [],
          fill: false,
        },
      ],
    };

    // Isi data dengan nilai fungsi linear
    for (let x = -10; x <= 10; x++) {
      data.labels.push(x);
      data.datasets[0].data.push(a * x + b);
    }

    // Tampilkan grafik menggunakan Chart.js
    let ctx = document.getElementById("myChart").getContext("2d");
    chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
          y: {
            type: "linear",
            position: "left",
          },
        },
      },
    });

    // expression
    document.getElementById("aExpression").innerText = inputA.value + "x";

    if (inputB.value < 0) {
      document.getElementById("bExpression").innerText = inputB.value;
    } else if (inputA.value > 0) {
      document.getElementById("bExpression").innerText = "+" + inputB.value;
    }
  }
}

// reset button
function resetGraph() {
  // expression
  document.getElementById("aExpression").innerText = "";
  document.getElementById("bExpression").innerText = "";

  // Hapus grafik sebelumnya jika ada
  if (chart !== null) {
    chart.destroy();
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
  }

  var ctx = document.getElementById("myChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Linear Function",
          borderColor: "rgb(75, 192, 192)",
          data: [],
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
        y: {
          type: "linear",
          position: "left",
        },
      },
    },
  });
}
