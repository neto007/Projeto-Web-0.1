import styles from './login.module.scss';

export default class {

  constructor() {
    'ngInject';
    this.styles = styles;
  }

  $onInit() {
    document.querySelector("body").classList.add(this.styles.login);
  }

  $onChanges() {
  }

  $onDestroy() {
    document.querySelector('body').classList.remove(this.styles.login);
  }
}
