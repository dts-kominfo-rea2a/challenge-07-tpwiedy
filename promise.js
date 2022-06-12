const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (kondisi) => {
  let data = [];
  try {
    let data1 = await promiseTheaterIXX();
    let data2 = await promiseTheaterVGC();
    data1.forEach((element) => {
      data.push(element);
    });
    data2.forEach((element) => {
      data.push(element);
    });
    let redu = data
      .filter((d) => d.hasil === kondisi)
      .reduce((p, c, i, a) => i + 1);
    return redu;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
