export default class {

  constructor($mdSidenav) {
    'ngInject';

    this.$mdSidenav = $mdSidenav;

    this.menu = [
      {
        title: 'Dashboard',
        link: '/',
        icon: 'dashboard'
      },
      {
        title: 'Estabelecimentos',
        link: 'estabelecimento-list',
        icon: 'business'
      },
      {
        title: 'Voucher',
        link: 'voucher-list',
        icon: 'credit_card',
      },
      {
        title: 'Eventos',
        link: 'evento-list',
        icon: 'event'
      },
      {
        title: 'Galeria',
        link: 'galeria-list',
        icon: 'wallpaper'
      }
    ];


  }

  toggleLeftMenu() {
    console.log('hi');
    this.$mdSidenav('menuLeft').open();
  }
}


