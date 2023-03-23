// Function to escape special characters for regex

const regexEscape = (str) => {
  return str?.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};
export { regexEscape };
