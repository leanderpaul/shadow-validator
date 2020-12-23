const { validateMiddleware } = require('../dist/index');

const request = {
  body: {},
  params: {},
  query: {}
};

const response = {
  status: null,
  data: null,
  status: (statusCode) => {
    this.status = statusCode;
    return this;
  },
  json: (respData) => {
    this.data = respData;
    return this;
  }
};
