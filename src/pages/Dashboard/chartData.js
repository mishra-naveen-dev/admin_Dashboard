export const data = [
  ["Year", "Sales"],
  ["2013", 1130],
  ["2014", 1170],
  ["2015", 1140],
  ["2016", 1180],
];

export const options = {
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
  colors: ["#1b9e77", "#d95f02", "#7570b3"], // Different colors for bars
  bar: { groupWidth: "75%" }, // Increase bar width
  areaOpacity: 0.2, // Adjust opacity for transparency
  lineWidth: 2,
  pointSize: 0, // Hide data points
  annotations: {
    textStyle: {
      fontSize: 0, // Hide annotations
    },
  },
};
