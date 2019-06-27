import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InitPage } from './init';
import { ReactiveFormsModule } from '@angular/forms';
import { InitService } from './service/init.service';

@NgModule({
  declarations: [
    InitPage,
  ],
  imports: [
    IonicPageModule.forChild(InitPage),
    ReactiveFormsModule
  ], exports: [
    InitPage
  ], providers: [
    InitService
  ]
})
export class InitPageModule { }
