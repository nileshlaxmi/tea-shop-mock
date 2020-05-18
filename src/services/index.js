export const successHandler = res => {
  return Promise.resolve(res.data);
};

export const errorHandler = error => {
  return Promise.reject(error.response.data);
};

export const errHandler = error => {
  if ('message' in error) return error.message;
  else if ('errors' in error) return error.errors[0];
};