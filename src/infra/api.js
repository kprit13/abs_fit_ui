import axios from 'axios';
import moment from 'moment-timezone';

const api = axios.create({
  baseURL: 'http://product-catalog-kaay.com',
});

api.interceptors.request.use(
  async (config) => {
    const storedToken = JSON.parse(localStorage.getItem('accessToken') || '{}');
  const isValidToken = storedToken.expiresAt && moment(storedToken.expiresAt, "DD-MM-YYYY HH:mm:ss").isAfter(moment());
  ;

  if (isValidToken) {
    config.headers.Authorization = `Bearer ${storedToken.accessToken}`;
  } else {
    try {
      const response = await getToken();
      const newToken = response.data;
      const expiresAt = moment().add(1, 'hours').format('DD-MM-YYYY HH:mm:ss');
      localStorage.setItem('accessToken', JSON.stringify({ accessToken: newToken, expiresAt }));
      config.headers.Authorization = `Bearer ${newToken}`;
    } catch (error) {
      throw error;
    }
  }
  return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

const getToken = async () => {
  const reposne = await axios
    .post(
      'http://auth-service-kaay.com/' + 'generateToken',
      {
        "appID": "c856fcbb-8933-4e0b-85d1-80eb0586cd83"
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error.response) {
        // client received an error response (5xx, 4xx)
        if (error.response.data) {
          let reason = error.response.data.reason
            ? error.response.data.reason
            : error.response.data;
          throw new Error('Error while getting Token : ' + reason);
        } else {
          throw new Error('Error while getting Token : ' + error.message);
        }
      }
      throw error;
    });
  return reposne;
};

const makeApiCall = async (method, url, data = null, auth = {}) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`,
    };
    const response = await api.request({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export default makeApiCall;
