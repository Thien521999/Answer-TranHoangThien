// Đệ quy
const sumNumberArr = (arr) => {
  if (arr.length === 0) return 0;

  const [n, ...ns] = arr;
  return n + sumNumberArr(ns);
};

console.log(sumNumberArr([5, 9, 6, 8, 4, 6]));
