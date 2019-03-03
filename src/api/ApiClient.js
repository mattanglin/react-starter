// Universal API client
// Server client necessary for SSR. Will need to have authorization
// set in client for redux based client requests serverside
import axios from 'axios';

class ApiClient {
  constructor(serverConfig) {
    this.serverConfig = serverConfig;
    this.request = axios.request();

    // Create instance method for each req method
    // Data-less methods
    ['get', 'delete', 'head', 'options'].forEach((method) => {
      this[method] = (path, options) => this.makeRequest(
        path,
        undefined,
        options,
      );
    });
    // Data methods
    ['post', 'put', 'patch'].forEach((method) => {
      this[method] = (path, data, options) => this.makeRequest(
        path,
        data,
        options,
      );
    });
  }

  makeRequest(url, data, options) {
    this.request
    // On the client we simply format the url to the proxy and make the request
    // On the server, we need to add credentials from cookies to headers and then make the requests
    // Maybe I should just use switchboard instead of re-writing this whole thing...
  }

  // Client side methods
  formatClientUrl(path) {
    // simply append a leading '/api' to the request, and ensure leading slash
  }

  // Server side methods
  formatServerUrl(path) {
    // digest config and according to 
  }
}

export default ApiClient;
