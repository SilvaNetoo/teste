import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailProductService } from './service/detail-product.service';
import { environment } from '../../environment/environment';
import { Product } from '../../models/product.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Constante } from '../../constant/constante';

@IonicPage()
@Component({
  selector: 'page-detail-product',
  templateUrl: 'detail-product.html',
})
export class DetailProductPage {

  formAmount: FormGroup;
  amount: number;
  product: Product;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private detailProductService: DetailProductService,
    private fb: FormBuilder
  ) { }

  createForm() {
    this.formAmount = this.fb.group({
      amount: Constante.removeAdicionaUm
    });
  }

  ionViewDidLoad() {
    this.createForm();
    if (this.navParams.get('id') && this.navParams.get('id').searchId && this.navParams.get('id').idEstablishment) {
      this.detailProductService.getRequest(`${environment.establishment}/${this.navParams.get('id').idEstablishment}/${environment.product}`,
        this.navParams.get('id').searchId).subscribe(product => {
          console.log(product);
          this.product = new Product();
          this.product = product;
        });
    }
  }

  multiplied(value: number, multiple: number): number {
    return value && multiple ? value * multiple : value;
  }

  remove() {
    if (this.formAmount.get('amount').value) {
      let num = parseInt(this.formAmount.get('amount').value);
      this.formAmount.get('amount').setValue(num - Constante.removeAdicionaUm);
    }
  }

  add() {
    if (this.formAmount.get('amount').value < this.product.amount) {
      let num = parseInt(this.formAmount.get('amount').value);
      this.formAmount.get('amount').setValue(num + Constante.removeAdicionaUm);
    }
  }

  greaterThanOne() {
    return this.formAmount.get('amount').value && this.formAmount.get('amount').value > Constante.valorOrigem ? true : false;
  }

  addingToBag() {
    if (this.formAmount.get('amount').value) {
      console.log(this.formAmount.get('amount').value);
    }
  }

}
