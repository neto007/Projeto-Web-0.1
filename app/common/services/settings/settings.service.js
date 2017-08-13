export default class {
  constructor() {
    'ngInject';
  }

  getApiUrl() {
    return 'https://5931f8ab1f6f92001156b517.mockapi.io';
  }

  getApiUrlWithEndpoint(endpoint) {
    return `${this.getApiUrl()}/${endpoint}`;
  }


}