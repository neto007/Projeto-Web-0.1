import loginComponent from './login.component';

const module = angular.module('front.app.login', []);

module.component('login', loginComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>',
      noShell: true
    });
});

export default module.name;
