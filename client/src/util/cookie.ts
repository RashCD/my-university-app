import Cookies from 'js-cookie';

class Cookie {
  static DEFAULT_OPTIONS = {
    path: '/',
    secure: window.location.protocol === 'https:',
    domain: window.location.hostname || '',
    expires: 365,
  };

  static set(key: string, value: string, options = {}) {
    return Cookies.set(key, value, {
      ...Cookie.DEFAULT_OPTIONS,
      ...options,
    });
  }

  static get<T>(key: string, defaultValue: T) {
    return Cookies.get(key) || defaultValue;
  }

  static getAll() {
    return Cookies.get();
  }

  static remove(key: string, options = {}) {
    return Cookies.remove(key, { ...Cookie.DEFAULT_OPTIONS, ...options });
  }
}

export default Cookie;
