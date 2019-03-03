// Browser API client
import axios from 'axios';
import { methods } from './rest';

class ApiClient {
  constructor() {
    this.generateRequestMethods();
  }

  generateRequestMethods() {
    methods.forEach((method) => {
      this[method] = (url, options) => this.makeRequest(method, url, options);
    });
  }

  /**
   * options include sepecified api as well as any axios request config options
   * https://github.com/axios/axios#request-config
   */
  makeRequest(
    method,
    url,
    {
      data,
      params,
      api,
      ...options
    }
  ) {
    // TODO handle invalid method
    return axios({
      ...options,
      method,
      url,
      // Prepend /api/ to send to proxy
      baseURL: api ? `/api/${api}/` : '/api/',
      params,
      data,
    });
    // TODO Handle Error? No. Handle in middleware
  }
}

export default ApiClient;
