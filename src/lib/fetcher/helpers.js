export const convertToGetParams = (params) => {
  window.console.log("params", params);
  const queryString = [];
  for (const key in params) {
    const param = params[key];
    // if (!param && typeof param !== "boolean") {
    //   continue;
    // }
    if (Array.isArray(param)) {
      param.forEach((value) => {
        queryString[queryString.length] = `${encodeURIComponent(
          key
        )}=${encodeURIComponent(value ?? "")}`;
      });
    } else {
      queryString[queryString.length] = `${encodeURIComponent(
        key
      )}=${encodeURIComponent(param || "")}`;
    }
  }
  window.console.log("queryString", queryString);
  return queryString.join("&");
};
