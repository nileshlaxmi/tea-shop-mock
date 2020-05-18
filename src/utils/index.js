export const checkSupportedFormat = (fileName, allSupporttedFormat) => {
  const array = fileName.split('.');
  const fileTye = array.length > 0 && array[array.length - 1].toLowerCase();
  return allSupporttedFormat.includes(fileTye);
};