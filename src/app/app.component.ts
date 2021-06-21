import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public alertController: AlertController) {}
  password: any = 1234;

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Palkavra passe errada.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  login(password) {
    if (this.password === 'despesas') {
      const elem = document.getElementById('password-container');
      elem.parentNode.removeChild(elem);
    } else {
      this.presentAlert();
    }
  }
}
