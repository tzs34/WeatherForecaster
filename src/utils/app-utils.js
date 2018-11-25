const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const addTwoDPZero = number => {
  let value = Number(number);
  let res = String(number).split(".");

  if (res.length === 1 || res[1].length < 3) {
    value = value.toFixed(2);
  }
  return value;
};

const getCountryCurrency = (balance, code) => {
  let codes = {
    GB: "£"
  };

  let sign = codes[code];
  let amount = addTwoDPZero(balance);

  return `${sign}${amount}`;
};

module.exports = { capitalize, addTwoDPZero, getCountryCurrency };
