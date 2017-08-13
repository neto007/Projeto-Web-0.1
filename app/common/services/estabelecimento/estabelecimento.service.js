export default class {

  constructor($http, SettingsService) { //inetar
    'ngInject';

    this.$http = $http;
    this.settings = SettingsService;
    
    this.url = this.settings.getApiUrlWithEndpoint('estabelecimento');
  }

  findAll() {
    return this.$http.get(this.url)
      .then((estabelecimentos) => estabelecimentos.data);
  }

  findById(id) {
    return this.$http.get(`${this.url}/${id}`)
      .then((estabelecimento) => estabelecimento.data);
  }

  removeById(id) {
    return this.$http.delete(`${this.url}/${id}`);
  }

  updateById(id, estabelecimento) {

    if(estabelecimento.id) {
      delete estabelecimento.id;    
    }

    return this.$http.put(`${this.url}/${id}`, estabelecimento)
      .then((estabelecimento) => estabelecimento.data);
  }

  create(estabelecimento) {
    return this.$http.post(`${this.url}`, estabelecimento)
      .then((estabelecimento) => estabelecimento.data);
  }

}