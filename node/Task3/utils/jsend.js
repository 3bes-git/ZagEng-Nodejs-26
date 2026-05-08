const success = (res, data, statusCode = 200) => {
  res.status(statusCode).json({ status: 'success', data });
};

const fail = (res, message, statusCode = 400) => {
  res.status(statusCode).json({ status: 'fail', message });
};

const error = (res, message, statusCode = 500) => {
  res.status(statusCode).json({ status: 'error', message });
};

module.exports = { success, fail, error };
