import axios from "axios";
import APIMap from "./endpoints";

const getData = function() {
  return axios.get(`${APIMap.getData}`);
};

export { getData };
