import UsuarioService from './usuario/usuario.service';
import SettingsService from './settings/settings.service';


const module = angular.module('front.services', []);

module.service('SettingsService', SettingsService);
module.service('UsuarioService', UsuarioService)


export default module.name;