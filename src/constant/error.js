const errorMessages = {
  fileSizeError: size => `File should be less than ${size} MB in size`,
  resolevError: "Please resolve below error",
  emailValidation: "Entered Email is not valid",
  blank: field => `${field} cannot be blank`,
  numberNotValid: field => `${field} is not valid.`,
  priceNotValid: field => `${field} cannot be less than 0.`,
  maxLengthReached: (elementName, charLength) =>
    `${elementName} should not be greater than ${charLength}.`,
  resolve: 'Please below errors'
};

export default errorMessages;