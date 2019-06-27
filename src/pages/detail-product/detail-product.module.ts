import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailProductPage } from './detail-product';
import { DetailProductService } from './service/detail-product.service';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DetailProductPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailProductPage),
    PipesModule
  ], providers: [
    DetailProductService
  ]
})
export class DetailProductPageModule { }
