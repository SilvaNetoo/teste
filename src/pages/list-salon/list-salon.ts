import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { ListEstablishmentService } from './service/list-establishment.service';
import { environment } from '../../environment/environment';
import { Establishment } from '../../models/establishment.model';

@IonicPage()
@Component({
  selector: 'page-list-salon',
  templateUrl: 'list-salon.html',
})
export class ListSalonPage {

  formHome: FormGroup;

  searchQuery: string = '';
  establishments: Array<Establishment>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private listEstablishmentService: ListEstablishmentService
  ) { }

  ngOnInit() {
    this.createForm();
    this.consultEstablishmentByCategory();
  }

  ionViewDidEnter() {
    setTimeout(function () {
      $('.searchbar-input').focus();
    }, 500);
  }

  createForm() {
    this.formHome = this.fb.group({
      search: ''
    });
  }

  initializeItems() {
    if (this.formHome.get('search').value) {
      this.listEstablishmentService.getRequest(environment.establishmentSearch, this.formHome.get('search').value).subscribe(establishments => {
        this.establishments = new Array<Establishment>();
        this.establishments = establishments;
      });
    }
  }

  private consultEstablishmentByCategory() {
    if (this.navParams.get('category')) {
      this.listEstablishmentService.getRequest(environment.establishmentCategory, this.navParams.get('category')).subscribe(establishments => {
        this.establishments = new Array<Establishment>();
        this.establishments = establishments;
      });
    }
  }

  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;

    if (this.establishments && val && val.trim() != '') {
      this.establishments = this.establishments.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selectItem(establishment: Establishment): void {
    if (establishment) {
      this.formHome.get('search').reset();
      this.formHome.get('search').setValue(establishment.name);
      this.navCtrl.push('DetailSalonPage', { id: establishment.id })
    }
  }

  validationOfFormControl(control: AbstractControl): boolean {
    if (control) {
      return control.value !== undefined && control.value !== '';
    }
  }

}
