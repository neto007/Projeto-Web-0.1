import UsuarioService from './usuario/usuario.service';
import SettingsService from './settings/settings.service';
import EstabelecimentoService from './estabelecimento/estabelecimento.service';
import EstabelecimentoCategoriasService from './estabelecimento/estabelecimento-categorias.service';
import VoucherService from './voucher/voucher.service';
import GaleriaService from './galeria/galeria.service';

const module = angular.module('front.services', []);

module.service('SettingsService', SettingsService);
module.service('UsuarioService', UsuarioService);
module.service('EstabelecimentoService', EstabelecimentoService);
module.service('EstabelecimentoCategoriasService', EstabelecimentoCategoriasService);
module.service('VoucherService', VoucherService);
module.service('GaleriaService', GaleriaService)

export default module.name;