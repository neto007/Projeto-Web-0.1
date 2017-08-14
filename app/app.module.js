console.log('application loading...');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import animate from 'angular-animate';
import angularMaterial from 'angular-material';
import angularMessages from 'angular-messages';
import angularMaterialIcons from 'angular-material-icons';
import angularAria from 'angular-aria';
import angularTranslate from 'angular-translate';
import AppComponent from './app.component';
import Common from './common/common.module';
import AngularToastr from 'angular-toastr';
import 'ng-material-datetimepicker';
import * as moment from 'moment';
import 'angular-material/angular-material.css';
import 'angular-toastr/dist/angular-toastr.css';
import Login from './login/login.module';
import Usuario from './usuario/usuario.module';







window.moment = moment;
// create our app module and setup core dependencies
angular.module('app', [
    uiRouter,
    animate,
    angularMaterial,
    angularMaterialIcons,
    angularMessages,
    AngularToastr,
    angularTranslate,
    Common,
    Login,
    Usuario,




])

/* istanbul ignore next */
.config(($urlRouterProvider, $locationProvider, $stateProvider, $mdThemingProvider) => {
    'ngInject';

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true);

    $stateProvider.state('home', {
        url: '/',
        redirectTo: 'login'
    });

    // setup default route
    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
        .primaryPalette('purple')
        .accentPalette('indigo');


})

/* istanbul ignore next */
.run(($rootScope, $state) => {
    // inject shell
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
        if (toState.hasOwnProperty('redirectTo')) {
            event.preventDefault();
            $state.go(toState.redirectTo, toParams, { location: 'replace' })
            return;
        }

        if ((!toState.hasOwnProperty('noShell') || toState.noShell === false) && !(/\<shell\>/g).test(toState.template)) {
            toState.template = `<shell>${toState.template}</shell>`;
        }
    });
})

// setup root component
.component('app', AppComponent);