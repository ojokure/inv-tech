const {
  getWeatherInfo,
  normalizeInput,
  standardizeLocalTime,
} = require("../helpers");

test("normalizeInput works as it should", () => {
  const testInput1 = [" utah", "Ikeja ", "       Tokyo", "  Paris", " Lagos"];
  const testInput2 = ["Accra ", "Lagos", "  Geneva"];

  expect(normalizeInput(testInput1)).toEqual([
    "utah",
    "Ikeja",
    "Tokyo",
    "Paris",
    "Lagos",
  ]);
  expect(normalizeInput(testInput2)).not.toEqual(testInput2);
});
