function plotGraph() {
  if (
    document.getElementById("inputA").value === "" ||
    document.getElementById("inputB").value === "" ||
    document.getElementById("inputC").value === "" ||
    document.getElementById("inputD").value === ""
  ) {
    alert("input value cannot be empty");
  } else if (document.getElementById("inputA").value === "0") {
    alert("a value cannot be 0");
  } else {
    // Ambil nilai a, b, c, dan d dari input
    var a = parseFloat(document.getElementById("inputA").value);
    var b = parseFloat(document.getElementById("inputB").value);
    var c = parseFloat(document.getElementById("inputC").value);
    var d = parseFloat(document.getElementById("inputD").value);

    // Hapus grafik sebelumnya jika ada
    if (chart !== null) {
      chart.destroy();
    }

    // Buat data untuk grafik kubik
    var data = {
      labels: [],
      datasets: [
        {
          label: `f(x) = ${(document.getElementById("aExpression").innerText =
          inputA.value + "x³")}${(document.getElementById(
          "bExpression"
        ).innerText = " + " + inputB.value)}${(document.getElementById("cExpression").innerText = "x² + " + inputC.value)}${(document.getElementById("dExpression").innerText = "x + " + inputD.value)}`,
          borderColor: "rgb(75, 192, 192)",
          data: [],
          fill: false,
        },
      ],
    };

    // Isi data dengan nilai fungsi kubik
    for (var x = -10; x <= 10; x++) {
      data.labels.push(x);
      data.datasets[0].data.push(a * x * x * x + b * x * x + c * x + d);
    }

    // Tampilkan grafik menggunakan Chart.js
    var ctx = document.getElementById("myChart").getContext("2d");
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
    document.getElementById("aExpression").innerText = inputA.value + "x³  ";

    if (inputB.value < 0) {
      document.getElementById("bExpression").innerText = inputB.value + "x²";
    } else if (inputA.value > 0) {
      document.getElementById("bExpression").innerText =
        "+ " + inputB.value + "x² ";
    }

    if (inputC.value < 0) {
      document.getElementById("cExpression").innerText = inputC.value + "x";
    } else if (inputC.value > 0) {
      document.getElementById("cExpression").innerText =
        " + " + inputC.value + "x ";
    }

    if (inputD.value < 0) {
      document.getElementById("dExpression").innerText = inputD.value;
    } else if (inputD.value > 0) {
      document.getElementById("dExpression").innerText = " + " + inputD.value;
    }
  }
}

function resetGraph() {
  // expression
  document.getElementById("aExpression").innerText = "";
  document.getElementById("bExpression").innerText = "";
  document.getElementById("cExpression").innerText = "";
  document.getElementById("dExpression").innerText = "";

  // Hapus grafik sebelumnya jika ada
  if (chart !== null) {
    chart.destroy();
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("inputC").value = "";
    document.getElementById("inputD").value = "";
  }

  var ctx = document.getElementById("myChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Cubic Function",
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
