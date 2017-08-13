export default class EstabelecimentoCategoriasService {
  constructor($http, SettingsService) {
    'ngInject';
    
    this.$http = $http;

    this.url = SettingsService.getApiUrlWithEndpoint("estabelecimentoCategorias");
  }

  findAll() {
    return this.$http.get(this.url)
      .then((response) => response.data);
  }
}