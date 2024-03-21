exports.success = (statusCode, result) => {
  return {
    status: "Ok",
    statusCode,
    result,
  };
};

exports.error = (statusCode, message) => {
  return {
    status: "Error",
    statusCode,
    message,
  };
};
// export default {
//   success,
//   error,
// };
