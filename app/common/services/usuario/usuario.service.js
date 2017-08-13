export default class {

  constructor($http, SettingsService) { //inetar
    'ngInject';

    this.$http = $http; // injetar
    this.settings = SettingsService; // injetar

    this.apiUrl = this.settings.getApiUrl();
  }

  // Isso vai retornar uma promise!
  obterTodos() {
    return this.$http.get(`${this.apiUrl}/users`);
  }
}