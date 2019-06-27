import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formLogin: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formLogin = this.fb.group({
      email: '',
      password: ''
    });
  }

  login() {
    console.log(this.formLogin.value);
  }

}
