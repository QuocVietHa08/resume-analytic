import Axios from 'axios';
import Cookies from 'js-cookie';

const api = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: "https://send-in-blue-api.uc.r.appspot.com/v1/sendinblue/send"
});

api.interceptors.request.use(
  (config) => {
    config.headers['domain_name']= `asure-pro`;
    
    return config;
  },
  (error) => Promise.reject(error),
);

const logout = async () => {
  Cookies.remove('token');
  Cookies.remove('refreshToken');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userInfo');
};

api.interceptors.response.use(
  (response) => response,
   (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error.response);
    }
    return logout();
  },
);

export default api;
