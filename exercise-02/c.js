// use async/await
const api = () => 1;
const api2 = (result) => result + 1;

const callApis = async () => {
  let result = await api();
  let result2 = await api2(result);
  let result3 = await api2(result2);

  console.log("result:  ", result);
  console.log("result2:  ", result2);
  console.log("result3:  ", result3);
};

console.log(callApis());
