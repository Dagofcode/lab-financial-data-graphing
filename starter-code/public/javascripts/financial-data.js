function updateChart() {
  let startDate = document.querySelector("#beginDate");
  let endDate = document.querySelector("#endDate");
  console.log(startDate);
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  axios
    .get("http://api.coindesk.com/v1/bpi/historical/close.json")
    .then(({ data }) => {
      let arrValues = Object.values(data.bpi);
      let arrKeys = Object.keys(data.bpi);
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: arrKeys,
          datasets: [
            {
              label: "# of Votes",
              data: arrValues,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    })

    .catch(err => console.log("Error", err));
}
