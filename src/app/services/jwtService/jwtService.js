import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout', 'Invalid access_token');
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit('onNoAccessToken');

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('/api/auth/register', data).then((response) => {
        if (response.data.user) {
          this.setSession(response.data.access_token);
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      });
    });
  };

  signInWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      const data = { email, password };
      axios
        .post(`${process.env.REACT_APP_EMPRENDEDOR_API}/api/auth`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response.data.token) {
            const decoded = jwtDecode(response.data.token);

            if(decoded?.role === 'admin') {
              this.setSession(response.data.token);
            }

            resolve(decoded);

          } else {
            reject(response.data.error);
          }
        });
    });
  };

  signInWithToken = () => {
    console.log('signInWithToken');
    return new Promise((resolve, reject) => {
      const data = {
        token: this.getAccessToken(),
      };
      axios
        .post(`${process.env.REACT_APP_EMPRENDEDOR_API}/api/auth/refresh`, data, {
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          if (response.data.token) {
            const decoded = jwtDecode(response.data.token);

            if(decoded?.role !== 'admin') {
              this.logout();
              reject(new Error('El usuario no tiene los permisos necesarios.'));
            }

            this.setSession(response.data.token);
            resolve(decoded);
          } else {
            this.logout();
            reject(new Error('Failed to login with token.'));
          }
        })
        .catch((error) => {
          this.logout();
          reject(new Error('Failed to login with token.'));
        });
    });
  };

  updateUserData = (user) => {
    return axios.post('/api/auth/user/update', {
      user,
    });
  };

  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem('@emprendedor_admin:access_token', access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem('@emprendedor_admin:access_token');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    return window.localStorage.getItem('@emprendedor_admin:access_token');
  };
}

const instance = new JwtService();

export default instance;
