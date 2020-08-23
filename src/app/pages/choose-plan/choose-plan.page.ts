import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.page.html',
  styleUrls: ['./choose-plan.page.scss'],
})
export class ChoosePlanPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goTo(page) {
    if (page == 'home') {
      this.navCtrl.navigateBack('home');
    } else {
      this.navCtrl.navigateForward(page);
    }
  }
  
  logout() {
    this.navCtrl.navigateRoot('home');
  }
}
