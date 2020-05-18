import errorMessages from "../../constant/error";
import { constants, validateRequired, validateMaxLength } from "./common";

export const defaultValidation = {
  name: (value) => {
    if (!validateRequired(value)) {
      return errorMessages.blank("Name");
    }
    if (!validateMaxLength(value, 26)) {
      return errorMessages.maxLengthReached("Length of name", 25);
    }
  },
  description: (value) => {
    if (!validateRequired(value)) {
      return errorMessages.blank("Description");
    }
    if (!validateMaxLength(value, 256)) {
      return errorMessages.maxLengthReached("Length of description", 255);
    }
  },
  price: (value) => {
    let _value = Number(value);
    if (!validateRequired(_value)) {
      return errorMessages.blank("Price");
    }
    if (_value < 0) {
      return errorMessages.priceNotValid("Price");
    }
    if (_value && _value.length > 0) {
      if (!constants.numeric.test(_value)) {
        return errorMessages.numberNotValid("Price");
      }
      if (!validateMaxLength(_value, 10)) {
        return errorMessages.maxLengthReached("Price", 9);
      }
    }
  },
  
};
