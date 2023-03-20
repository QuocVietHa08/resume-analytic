import Axios from 'axios';
import Cookies from 'js-cookie';
import configs from '../config';

const api = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: configs.API_DOMAIN,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const logout = async () => {
  const { default: store } = await import('../redux/store');
  Cookies.remove('token');
  Cookies.remove('refreshToken');
  // history.push('/');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userInfo');
  store.dispatch({ type: 'auth/authUserByAccessToken', payload: null });
  // store.dispatch({ type: 'auth/setIsLogoutEvent', payload: true})
};

api.interceptors.response.use(
  (response) => response,
   (error) => {
    // const originalConfig = error.config;
    if (error.response.status !== 401) {
      return Promise.reject(error.response);
    }
    return logout();
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('userInfo');
    // store.dispatch({ type: 'auth/authUserByAccessToken', payload: null });
    
    // const refreshToken = Cookies.get('refreshToken');
    // if (!refreshToken) {
    //   logout();
    //   return Promise.reject(error.response);
    // }
    // return Axios.post(`${configs.API_DOMAIN}/v1/app/auth/request-access-token`, {
    //   refreshToken,
    // })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       const { data } = res.data;
    //       Cookies.set('token', data.token);
    //       originalConfig.headers.Authorization = `Bearer ${data.token}`;
    //       return Axios(originalConfig);
    //     }
    //     logout();
    //     return Promise.reject(error.response);
    //   })
    //   .catch(() => {
    //     logout();
    //     return Promise.reject(error.response);
    //   });
  },
);

export default api;
