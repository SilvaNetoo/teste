import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSalonPage } from './list-salon';
import { ListEstablishmentService } from './service/list-establishment.service';

@NgModule({
  declarations: [
    ListSalonPage,
  ],
  imports: [
    IonicPageModule.forChild(ListSalonPage),
  ], providers: [
    ListEstablishmentService
  ]
})
export class ListSalonPageModule { }
