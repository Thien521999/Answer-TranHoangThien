// use promise
const promise = new Promise((resolve) => {
  const api = () => 1;
  resolve(api());
});

promise
  .then((result) => {
    console.log("result:  ", result);
    const api2 = (result) => result + 1;
    return api2(result);
  })
  .then((result2) => {
    console.log("result2:  ", result2);
    const api3 = (result) => result + 1;
    return api3(result2);
  })
  .then((result3) => {
    console.log("result3:  ", result3);
  });
