function plotGraph() {
  if (
    document.getElementById("inputA").value === "" ||
    document.getElementById("inputB").value === "" ||
    document.getElementById("inputC").value === ""
  ) {
    alert("input value cannot be empty");
  } else if (document.getElementById("inputA").value === "0") {
    alert("a value cannot be 0");
  } else {
    // Ambil nilai a, b, dan c dari input
    var a = parseFloat(document.getElementById("inputA").value);
    var b = parseFloat(document.getElementById("inputB").value);
    var c = parseFloat(document.getElementById("inputC").value);

    // Hapus grafik sebelumnya jika ada
    if (chart !== null) {
      chart.destroy();
    }

    // Buat data untuk grafik kuadrat
    var data = {
      labels: [],
      datasets: [
        {
          label: `f(x) = ${(document.getElementById("aExpression").innerText =
            inputA.value + "x²")}${(document.getElementById(
            "bExpression"
          ).innerText = " + " + inputB.value)}${(document.getElementById("cExpression").innerText = "x + " + inputC.value)}`,
          borderColor: "rgb(75, 192, 192)",
          data: [],
          fill: false,
        },
      ],
    };

    // Isi data dengan nilai fungsi kuadrat
    for (var x = -10; x <= 10; x++) {
      data.labels.push(x);
      data.datasets[0].data.push(a * x * x + b * x + c);
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
  }

  // expression
  document.getElementById("aExpression").innerText = inputA.value + "x² ";

  if (inputB.value < 0) {
    document.getElementById("bExpression").innerText = inputB.value + "x";
  } else if (inputA.value > 0) {
    document.getElementById("bExpression").innerText =
      "+ " + inputB.value + "x ";
  }

  if (inputC.value < 0) {
    document.getElementById("cExpression").innerText = inputC.value;
  } else if (inputC.value > 0) {
    document.getElementById("cExpression").innerText = " + " + inputC.value;
  }
}

function resetGraph() {
  // expression
  document.getElementById("aExpression").innerText = "";
  document.getElementById("bExpression").innerText = "";
  document.getElementById("cExpression").innerText = "";

  // Hapus grafik sebelumnya jika ada
  if (chart !== null) {
    chart.destroy();
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("inputC").value = "";
  }

  var ctx = document.getElementById("myChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Quadratic Function",
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
