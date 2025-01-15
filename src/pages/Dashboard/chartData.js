export const data1 = [
  ["Month", "Invested", "Earnings", "Expenses"],
  ["JAN", 1000, 400, 200],
  ["FEB", 1170, 460, 250],
  ["MAR", 660, 1120, 300],
  ["APR", 1030, 540, 350],
  ["MAY", 1000, 400, 200],
  ["JUN", 1170, 460, 250],
  ["JUL", 660, 1120, 300],
  ["AGU", 1030, 540, 350],
  ["SEP", 1000, 400, 200],
  ["OCT", 1170, 460, 250],
  ["NOV", 660, 1120, 300],
  ["DEC", 1030, 540, 350],
];

export const options1 = {
  title: "",
  hAxis: { title: "Month", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "70%" },
  colors: ["#4285F4", "#34A853", "#FBBC05"],
};

export const data2 = [
  ["Year", "Sales"],
  ["2013", 1130],
  ["2014", 1170],
  ["2015", 1140],
  ["2016", 1180],
];

export const options2 = {
  backgroundColor: "transparent",
  chartArea: {
    width: "90%",
    height: "80%",
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  },
  legend: { position: "none" },
  hAxis: {
    textPosition: "none",
    gridlines: { color: "transparent" },
    baselineColor: "transparent",
  },
  vAxis: {
    textPosition: "none",
    gridlines: { color: "transparent" },
    baselineColor: "transparent",
  },
  colors: ["#1b9e77", "#d95f02", "#7570b3"],
  bar: { groupWidth: "75%" },
  areaOpacity: 0.2,
  lineWidth: 2,
  pointSize: 0,
  annotations: {
    textStyle: {
      fontSize: 0,
    },
  },
};

export const pieData = [
  ["Status", "Count"],
  ["Pending", 547],
  ["Shipped", 398],
  ["Received", 605],
  ["Cancelled", 249],
  ["Refunded", 176],
];

export const pieOptions = {
  title: "",
  pieHole: 0.4,
  slices: [
    { color: "#4285F4" },
    { color: "#34A853" },
    { color: "#FBBC05" },
    { color: "#EA4335" },
    { color: "#FABB05" },
  ],
};