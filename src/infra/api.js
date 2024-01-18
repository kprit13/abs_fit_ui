import axios from 'axios';

const api = axios.create({
  baseURL: 'http://product-catalog-kaay.com',
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    try {
      const response = await getToken();
      const newToken = response.data.access_token;
      localStorage.setItem('accessToken', newToken);
      config.headers.Authorization = `Bearer ${newToken}`;
      return config;
    } catch (error) {
      throw error;
    }
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

const getToken = async () => {
  const reposne = await axios
    .post(
      'https://dev-8wk0ywxqn0gks4hm.us.auth0.com/oauth/' + 'token',
      {
        grant_type: 'password',
        username: 'keshav05041992@gmail.com',
        password: 'Infy@123',
        audience: 'product-catalog-kaay.com',
        scope: 'openid profile email',
        client_id: 'oEAgGSN34h75Hu8Bz2DFzsyR65nsj6ly',
        client_secret:
          'OaQvoKciMpHOELFTXQnXik5W0E2AcX6xZpEWICMBjL-CNsIGpBKDvgrnPIR3VxiX',
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
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
