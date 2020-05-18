export const constants = {
  numeric: /^[0-9]{10}$/,
  alphaNumeric: /^[a-zA-Z][0-9a-zA-Z]+$/,
  specialCharsNoSpace: /^[a-zA-Z][0-9a-zA-Z-_]+$/,
  specialCharsWithSpace: /^[a-zA-Z][0-9a-zA-Z-_ ]+$/,
  specialCharsWithSpaceForVariables: /^[{}$a-zA-Z][0-9a-zA-Z-_{} :$]+$/,
  onlySpace: /^[ ]+$/,
  validPhone: /^[0-9][0-9-]{8,11}[0-9]$/
};

export const isNumeric = value => constants.numeric.test(value);
export const validateRequired = value =>
  value && value.toString().trim().length > 0;

export const validateMaxLength = (value, maxLength) => {
  try {
    if (!maxLength || value.trim().length <= 0) return true;
    if (value && value.trim().length >= maxLength-1) return false;
    return true;
  } catch (e) {
    console.error("exception in validateMaxLength ", JSON.stringify(e));
    return true;
  }
};
