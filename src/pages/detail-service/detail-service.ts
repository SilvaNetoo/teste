import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { environment } from '../../environment/environment';
import { DetailServiceService } from './service/detail.service.service';
import { Service } from '../../models/service.model';

@IonicPage()
@Component({
  selector: 'page-detail-service',
  templateUrl: 'detail-service.html',
})
export class DetailServicePage {

  service: Service

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public detailServiceService: DetailServiceService
  ) { }

  ionViewDidLoad() {
    if (this.navParams.get('id') && this.navParams.get('id').searchId && this.navParams.get('id').idEstablishment) {
      this.detailServiceService.getRequest(`${environment.establishment}/${this.navParams.get('id').idEstablishment}/${environment.service}`,
        this.navParams.get('id').searchId).subscribe(service => {
          this.service = new Service();
          this.service = service;
        });
    }
  }

  addingToBag() { }

}
