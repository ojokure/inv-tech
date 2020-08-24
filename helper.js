module.exports = {
  normalizeInput,
};

function normalizeInput(input) {
  const cleanedInput = input.map((str) => str.replace(/\s/g, ""));
  return cleanedInput;
}
