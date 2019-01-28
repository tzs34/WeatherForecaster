import {
  compose,
  curry,
  getValueOfProp,
  addSymbol,
  parseWeatherDay,
  getWeatherDateString,
  getDatefromWeatherObj,
  groupByProp,
  groupWeatherByDate,
  getPropNearestCurrentTime,
  getGroupedProps,
  formatWeatherData,
  getWeatherData
} from "../utils/app-utils";

const weatherObj = {
  cod: "200",
  message: 0.0082,
  cnt: 40,
  list: [
    {
      dt: 1485799200,
      main: {
        temp: 3.2,
        temp_min: 283.76,
        temp_max: 283.761,
        pressure: 1017.24,
        sea_level: 1026.83,
        dt_txt: "2019-01-28 18:00:00"
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 7.27, deg: 15.0048 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2019-01-28 18:00:00"
    },
    {
      dt: 1485799201,
      main: {
        temp: 2.0,
        temp_min: 283.76,
        temp_max: 283.761,
        pressure: 1017.24,
        sea_level: 1026.83,
        dt_txt: "2019-02-28 18:00:00"
      },
      weather: [
        { id: 500, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 7.27, deg: 15.0048 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2019-02-28 18:00:00"
    }
  ],
  city: {
    id: 1907296,
    name: "Tawarano",
    coord: { lat: 35.0164, lon: 139.0077 },
    country: "none"
  }
};
test("curry should curry a function", () => {
  let add3 = curry((a, b, c) => a + b + c);
  expect(add3(1)(2)(3)).toBe(6);
  expect(add3(1)(2)(3)).not.toBe(4);
  expect(add3(1, 2)(3)).toBe(6);
  expect(add3(1, 2, 3)).toBe(6);
});

test("compose should compose a functions", () => {
  let add2 = a => a + 2;
  let multiplyBy3 = a => a * 3;
  expect(
    compose(
      multiplyBy3,
      add2
    )(1)
  ).toBe(9);
  expect(
    compose(
      multiplyBy3,
      add2
    )(1)
  ).not.toBe(8);
});

test("getValueOfProp should get the value of prop from an object", () => {
  let test = { id: 1, tst: 6 };
  expect(getValueOfProp("id", test)).toBe(1);
  expect(getValueOfProp("id")(test)).toBe(1);
  expect(getValueOfProp("id", test)).not.toBe(6);
});

test("addSymbol should append a symbol to a input string", () => {
  let test = "hello";
  expect(addSymbol("symbol", test)).toBe("hello symbol");
});

test("parseWeatherDay should return the day value from a correctly formatted input string", () => {
  let test = "2019-01-28 18:00:00";
  expect(parseWeatherDay(test)).toBe("Monday");
  expect(parseWeatherDay(test)).not.toBe("Tuesday");
});

test("getWeatherDateString should return the date part from a weather object", () => {
  let test = weatherObj.list[0];
  expect(getWeatherDateString(test)).toBe("2019-01-28 18:00:00");
  expect(getWeatherDateString(test)).not.toBe("2019-01-01");
});

test("groupByProp should return an object which groups objects in an array by a property of objects", () => {
  let test = [
    { id: 1, tst: "hello" },
    { id: 1, tst: "world" },
    { id: 2, tst: "hello" }
  ];
  let func = getValueOfProp("id");
  let expected = {
    1: [{ id: 1, tst: "hello" }, { id: 1, tst: "world" }],
    2: [{ id: 2, tst: "hello" }]
  };
  expect(groupByProp(func, test)).toMatchObject(expected);
});

test("groupWeatherByDate should return an object which groups objects in an array by date prop of objects", () => {
  let test = weatherObj.list;
  let expected = {
    "2019-01-28": [
      {
        dt: 1485799200,
        main: {
          temp: 3.2,
          temp_min: 283.76,
          temp_max: 283.761,
          pressure: 1017.24,
          sea_level: 1026.83,
          dt_txt: "2019-01-28 18:00:00"
        },
        weather: [
          { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
        ],
        clouds: { all: 0 },
        wind: { speed: 7.27, deg: 15.0048 },
        rain: {},
        sys: { pod: "n" },
        dt_txt: "2019-01-28 18:00:00"
      }
    ],
    "2019-02-28": [
      {
        dt: 1485799201,
        main: {
          temp: 2.0,
          temp_min: 283.76,
          temp_max: 283.761,
          pressure: 1017.24,
          sea_level: 1026.83,
          dt_txt: "2019-02-28 18:00:00"
        },
        weather: [
          { id: 500, main: "Clear", description: "clear sky", icon: "01n" }
        ],
        clouds: { all: 0 },
        wind: { speed: 7.27, deg: 15.0048 },
        rain: {},
        sys: { pod: "n" },
        dt_txt: "2019-02-28 18:00:00"
      }
    ]
  };
  expect(groupWeatherByDate(test)).toMatchObject(expected);
});
test("getWeatherData should return an array of objects in correct format for the weaher application", () => {
  let test = weatherObj.list;
  let expected = [
    { day: "Monday", temp: 3, icon: 800 },
    { day: "Thursday", temp: 2, icon: 500 }
  ];

  expect(getWeatherData(test)).toMatchObject(expected);
});
