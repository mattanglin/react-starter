// ApiClient for the server
import axios from 'axios';
import ApiClient from './ApiClient';


class ServerClient extends ApiClient {
  constructor(config, req) {
    super();
    this.config = config;
    this.req = req;
  }

  // Override makeRequest on the server
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
    const apiConfig = this.getApiConfig(api);
    // TODO Add Auth
    return axios({
      method,
      // url: 'https://swapi.co/api/people',
      url,
      baseURL: apiConfig.url,
      data,
      params,
      ...options,
    });
  }

  proxyRequest() {
    // Make request from this.req
    const {
      method,
      url,
      body: data,
      params: { api } = {},
    } = this.req;

    return this.makeRequest(method, url, { data, api });
  }

  getApiConfig(api) {
    const apiConfig = this.config.apis.find(({ name }) => name === api);

    return apiConfig || this.config.apis[0];
  }

  getAuth() {
    // add Auth to axios request. Would be nice to be able to configure this...
  }

  // Handle refresh tokens?
}

export default ServerClient;
