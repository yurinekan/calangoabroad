import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name;
  lastname;
  email;
  password;
  phone;
  public fGroup: FormGroup;

  constructor(private navCtrl: NavController, private fBuilder: FormBuilder) {
    
    this.fGroup = this.fBuilder.group({
      'name': [this.name, Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')
      ])],
      'lastname': [this.lastname, Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')
      ])],
      'email': [this.email, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'password': [this.password, Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      'phone': [this.phone, Validators.compose([
        Validators.required,
        Validators.minLength(11)
      ])]
    },
    );
  }
  
  goTo(page) {
    if (page == 'home') {
      this.navCtrl.navigateBack('home');
    } else {
      this.navCtrl.navigateForward(page);
    }
  }
  
  register() {
    this.navCtrl.navigateForward('choose-plan')
  }
  ngOnInit() {
  }

}
