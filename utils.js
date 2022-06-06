'use strict';

// The string format for MySQL, see https://stackoverflow.com/a/27381633
const MYSQL_DATETIME = 'YYYY-MM-DD HH:mm:ss';
exports.MYSQL_DATETIME = MYSQL_DATETIME;

const asResponse = (code, data) => {
  return {
    code,
    ... (data? {data} : {}),
  };
};
exports.asResponse = asResponse;

