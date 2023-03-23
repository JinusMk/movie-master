import config from "../config";
import { convertToGetParams } from "./helpers";

const fetcher = async (url, options = {}) => {
  let { body, params } = options;
  url = `${url}?apiKey=${config.API_KEY}`;
  if (body) {
    //POST
    options.body = JSON.stringify(body);
  }

  if (params) {
    params = convertToGetParams(params);
    const separator = "&";
    url = `${url}${separator}${params}`;
  }

  return window
    .fetch(url, options)
    
    .then(async (resp) => {
      try {
        resp.data = await resp.json();
      } catch (e) {
        window.console.error("FETCHER_FAIL", "Invalid response", e);
      }
      return resp;
    })
    .then((resp) => {
      try {
        if (!resp?.ok) {
          window.console.error("FETCHER_FAIL", "Invalid response");
        }
      } catch (e) {
        window.console.error("api_call log error", e);
      }
      return resp;
    })
    .catch((e) => {
      window.console.error("FETCHER_FAIL", "catch");
    });
};

export default fetcher
