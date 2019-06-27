import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailSalonPage } from './detail-salon';
import { DetailSalonService } from './service/detail-salon.service';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DetailSalonPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailSalonPage),
    PipesModule
  ], providers: [
    DetailSalonService
  ]
})
export class DetailSalonPageModule { }
