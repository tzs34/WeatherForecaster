const KELVIN_CONST = 273.15;

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const curry = fn => {
  return (...xs) => {
    if (xs.length === 0) {
      throw Error("NO ARGUMENTS SUPPLIED TO FUNCTION");
    }
    if (xs.length >= fn.length) {
      return fn(...xs);
    }
    return curry(fn.bind(null, ...xs));
  };
};

const getValueOfProp = curry((prop, obj) => obj[prop]);

const addSymbol = curry((symbol, value) => {
  return `${value} ${symbol}`;
});

const parseWeatherDay = str => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let index = new Date(str).getDay();
  return days[index];
};

const parseWeatherDate = str => str.substring(0, 10);

const getWeatherDateString = getValueOfProp("dt_txt");

const getDatefromWeatherObj = obj => {
  return compose(
    parseWeatherDate,
    getWeatherDateString
  )(obj);
};

const getDayFromWeatherObj = obj => {
  return compose(
    parseWeatherDay,
    getWeatherDateString
  )(obj);
};

const groupByProp = curry((fn, arr) => {
  return arr.reduce((acc, obj, index) => {
    let prop = fn(obj);
    if (prop) {
      if (prop in acc) {
        acc[prop].push(obj);
      } else {
        acc[prop] = [];
        acc[prop].push(obj);
      }
    }
    return acc;
  }, {});
});

const groupWeatherByDate = groupByProp(getDatefromWeatherObj);

const getPropNearestCurrentTime = curry((prop, date, obj) => {
  let utcDate = +date;
  return Object.values(obj).reduce((acc, arr) => {
    let filtered = arr.filter(o => +new Date(o[prop]) > utcDate);
    acc.push(filtered[0]);
    return acc;
  }, []);
});

const getGroupedProps = curry((prop, obj) => {
  return Object.values(obj[prop]);
});

const getWeatherData = data => {
  const getWeatherNearestCurrentTime = getPropNearestCurrentTime(
    "dt_txt",
    new Date()
  );
  return compose(
    formatWeatherData,
    getWeatherNearestCurrentTime,
    groupWeatherByDate
  )(data);
};

const formatWeatherData = arr => {
  return arr.map(o => {
    let obj = {};
    obj.day = getDayFromWeatherObj(o);
    obj.temp = Math.floor(o.main.temp);
    obj.icon = o.weather[0].id;
    return obj;
  });
};

module.exports = {
  getWeatherData
};
