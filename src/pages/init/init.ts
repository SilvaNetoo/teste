import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
import { InitService } from './service/init.service';
import { environment } from '../../environment/environment';
import { Establishment } from '../../models/establishment.model';

@IonicPage()
@Component({
  selector: 'page-init',
  templateUrl: 'init.html',
})
export class InitPage {

  @ViewChild(Slides) slides: Slides;

  establishments: Array<Establishment>;

  categories = [
    {
      img: "../../assets/imgs/salao1.jfif",
      category: "Cabeleireiro"
    },
    {
      img: "../../assets/imgs/salao2.jpg",
      category: "Barbearia"
    },
    {
      img: "../../assets/imgs/salao3.jpg",
      category: "Esteticista"
    },
    {
      img: "../../assets/imgs/salao3.jpg",
      category: "Manicure"
    },
    {
      img: "../../assets/imgs/salao1.jfif",
      category: "Pedicure"
    },
    {
      img: "../../assets/imgs/salao1.jfif",
      category: "Maquiador"
    },
  ]

  constructor(
    public navCtrl: NavController,
    private initService: InitService
  ) { }

  ngOnInit() {
    this.inicializeEstablishment();
  }

  goToListSalon() {
    this.navCtrl.push('ListSalonPage');
  }

  /**
   * @description Método é responsável por inicializar a página com os estabelebimentos  
   */
  private inicializeEstablishment(): void {
    this.initService.getRequest(environment.establishment).subscribe(establishments => {
      this.establishments = new Array<Establishment>();
      this.establishments = establishments;
    });
  }

  goToDetailEstablishment(id: number) {
    if (id) {
      this.navCtrl.push('DetailSalonPage', { id: id })
    }
  }

  consultCategory(category: string) {
    if (category) {
      this.navCtrl.push('ListSalonPage', { category: category })
    }
  }

}
