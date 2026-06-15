import { NavigationExtras, Router } from '@angular/router'
import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  listaSeries: ISerie[] = [
    {
      nome: 'Breaking Bad (2008)',
      lancamento: '2008',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w1280/hGwm9Cj3CdbJIqQWNExQqiYmCd4.jpg',
      generos: ['Drama', 'Crime'],
      pagina: '/breakingBad',
      favorito: false,
      temporadas: 5,
      episodios: 71,
    },
    {
      nome: 'Brooklyn Nine-Nine: Lei e Desordem (2013)',
      lancamento: '2013',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w1280/A3SymGlOHefSKbz1bCOz56moupS.jpg',
      generos: ['Comédia', 'Crime'],
      pagina: '/brooklyn99',
      favorito: false,
      temporadas: 8,
      episodios: 161,
    }
  ];

  exibirSerie(serie: ISerie) {
    const NavigationExtras: NavigationExtras = { state: { paramSerie: serie } };
    this.router.navigate(['serie-detalhe'], NavigationExtras);
  }

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            serie.favorito = false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
};