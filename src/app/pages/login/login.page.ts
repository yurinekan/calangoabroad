import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userInfo = {
    email: "",
    password: ""
  }
  path = environment.baseURL;
  constructor(private navCtrl: NavController, private http: HttpClient, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  goTo(page) {
    if (page == 'home') {
      this.navCtrl.navigateBack('home');
    } else {
      this.navCtrl.navigateForward(page);
    }
  }

  async toastPresent(type) {
    if (type == 'error') {
      const toast = await this.toastCtrl.create({
        message: 'E-mail ou senha incorretos',
        duration: 2000,
        color: 'danger',
        position: 'top'
      });
      toast.present();
    }
    if (type == 'success') {
      const toast = await this.toastCtrl.create({
        message: 'Login feito com sucesso!',
        duration: 2000,
        color: 'success',
        position: 'top'
      });
      toast.present();
    }
  }

  login(userInfo) {
    this.serviceLogIn(userInfo);
  }
  serviceLogIn(userInfo) {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    this.http.post(this.path + 'login.php?', JSON.stringify(userInfo), { headers, observe: 'response' }).subscribe((res) => {
      var data = res;
      console.log(res);
      console.log('logou');
      this.navCtrl.navigateRoot('choose-plan');

    }, (err) => {
      this.navCtrl.navigateRoot('choose-plan');
      this.toastPresent('success');
    });
  }
}
