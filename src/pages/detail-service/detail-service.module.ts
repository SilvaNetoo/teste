import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailServicePage } from './detail-service';
import { DetailServiceService } from './service/detail.service.service';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DetailServicePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailServicePage),
    PipesModule
  ], providers: [
    DetailServiceService
  ]
})
export class DetailServicePageModule { }
