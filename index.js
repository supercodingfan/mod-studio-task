const solution = (arr) => {
  if (arr.length === 0) return null;

  const comparisonOperators = [
    "<",
    ">",
    "==",
    "===",
    "!=",
    "!==",
    "<=",
    ">=",
    "?",
  ];

  const convert = (input, parentOperator) => {
    const isPrior =
      comparisonOperators.includes(input[0]) || parentOperator === input[0];
    if (!Array.isArray(input)) {
      return input;
    } else {
      return `${isPrior ? "" : "("}${convert(input[1], input[0])} ${
        input[0]
      } ${convert(input[2], input[0])}${isPrior ? "" : ")"}`;
    }
  };

  return convert(arr, arr[0]);
};

const arr = [
  "OR",
  ["<", "a", "b"],
  ["AND", ["==", "c", "d"], ["!=", "e", "f"]],
];

console.log(solution(arr));
// "a < b OR (c == d AND e != f)"
