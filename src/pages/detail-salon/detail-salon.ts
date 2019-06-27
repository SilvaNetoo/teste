import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Establishment } from '../../models/establishment.model';
import { DetailSalonService } from './service/detail-salon.service';
import { environment } from '../../environment/environment';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-detail-salon',
  templateUrl: 'detail-salon.html',
})
export class DetailSalonPage {

  establishment: Establishment;
  formSegment: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private detailSalonService: DetailSalonService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    if (this.navParams.get('id')) {
      this.detailSalonService.getRequest(environment.establishment, this.navParams.get('id')).subscribe(establishment => {
        this.establishment = new Establishment();
        this.establishment = establishment;
      })
    }
  }

  private createForm(): void {
    this.formSegment = this.fb.group({
      segment: 'product'
    });
  }

  goToPage(page: string, searchId: number, idEstablishment: number): void {
    this.navCtrl.push(page, { id: { searchId, idEstablishment } });
  }

  selectedSegment() {
    return this.formSegment.get('segment').value && this.formSegment.get('segment').value === 'service' ? true : false;
  }

}
