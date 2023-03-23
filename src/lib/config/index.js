const getEnv = () => {
  if (window.location.hostname === "localhost") {
    return "local";
  }
  return process.env.REACT_APP_HOST_ENV || "development";
};

const ENV = getEnv();

const development = {
  API_KEY: "5ddc1c29",
  BASE_API: "http://www.omdbapi.com",
};

const local = {
  ...development,
};

const configs = {
  local,
  development,
};

const currentConfig = configs[ENV];

const config = {
  ENV,
  API_KEY: currentConfig.API_KEY,
  BASE_API: currentConfig.BASE_API,
};

export default config;
