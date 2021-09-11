const promise = new Promise(function (resolve) {
  const api = () => {
    return 1;
  };
  resolve(api());
});

promise
  .then(function (result) {
    console.log("result:  ", result);
    const api2 = (result) => {
      return result + 1;
    };
    return api2(result);
  })
  .then(function (result2) {
    console.log("result2:  ", result2);
    const api3 = (result) => {
      return result + 1;
    };
    return api3(result2);
  })
  .then(function (result3) {
    console.log("result3:  ", result3);
  });
