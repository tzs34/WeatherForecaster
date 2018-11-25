import Creds from "../creds";

let { LOCAL_URL } = Creds;

let localUrl =
  process.env.NODE_ENV === "production" ? "to-be-decided" : LOCAL_URL;

const API_MAP = {
  getData: `${localUrl}data`
};

export default API_MAP;
