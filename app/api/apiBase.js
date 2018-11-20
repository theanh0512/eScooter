import { Exception } from 'app/common/ExceptionHandler';

export const APIVersionV1 = 'v1';

function getHeaders(apiVersion) {
  switch (apiVersion) {
    default:
      return {
        'Content-Type': 'application/json'
      };
  }
}

/**
 * Private method to parse api response and handle exceptions/api errors
 * @param url
 * @param response
 * @returns {Promise<*|JSON|Promise<any>>}
 */
const handleResponse = async (url, response) => {
  switch (response.status) {
    case 200:
      try {
        return response.json();
      }
      catch (error) {
        // Log error in parsing json response
        return null;
      }
    default: {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType === 'text/html') {
        throw Exception(response.status, ''); // error 401 unauthorized
      }
      if (contentType && !contentType.includes('application/json')) {
        throw new TypeError("Oops, we haven't got JSON!");
      }

      const body = await response.json();
      if (!body || body.status == null || typeof body.status !== 'object') {
        // Handle signup error
        if (body.email && body.email instanceof Array) {
          const key = Object.keys(body)[0];
          const errorMessage = `${key} ${body[key][0]}`;
          throw new Exception(response.status, errorMessage);
        } else if (body.password && body.password instanceof Array) {
          const key = Object.keys(body)[0];
          const errorMessage = `${key} ${body[key][0]}`;
          throw new Exception(response.status, errorMessage);
        } else {
          throw new Exception(response.status, '');
        }
      } else if (
        body.status.message instanceof Object &&
        body.status.message.desc
      ) {
        throw new Exception(body.status.code, body.status.message.desc);
      } else if (
        body.status.message instanceof Object &&
        body.status.message.password
      ) {
        const key = Object.keys(body.status.message)[0];
        const errorMessage = `${key} ${body.status.message[key][0]}`;
        throw new Exception(body.status.code, errorMessage);
      } else {
        throw new Exception(body.status.code, body.status.message);
      }
    }
  }
};

/**
 * Private method to create a GET request
 * @param url
 * @param apiVersion
 * @returns {Promise<*|JSON|Promise<any>>}
 */
const get = async (url, apiVersion) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: getHeaders(apiVersion)
  });
  return handleResponse(url, response);
};

module.exports = {
  APIVersionV1,
  get
};
