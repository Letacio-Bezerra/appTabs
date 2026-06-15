import { NavigationExtras, Router } from '@angular/router'
import { Component } from '@angular/core';
import { IAtor } from '../model/IAtor';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(public router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  listaAtores: IAtor[] = [
    {
      rosto: 'https://media.themoviedb.org/t/p/w600_and_h900_face/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
      nome: 'Robert Downey Jr.',
      nascimento: '4 de abril de 1965',
      idade: 61,
      localNascimento: 'New York City, New York, USA',
      genero: 'Masculino',
      pagina: '/robertDowneyJr',
      favorito: false,
    },
    {
      rosto: 'https://media.themoviedb.org/t/p/w600_and_h900_face/ScmKoJ9eiSUOthAt1PDNLi8Fkw.jpg',
      nome: 'J.K. Simmons',
      nascimento: '9 de janeiro de 1955',
      idade: 71,
      localNascimento: 'Detroit, Michigan, USA',
      genero: 'Masculino',
      pagina: '/jKSimmons',
      favorito: false,
    }
  ];

  exibirAtor(ator: IAtor) {
    const NavigationExtras: NavigationExtras = { state: { paramAtor: ator } };
    this.router.navigate(['ator-detalhe'], NavigationExtras);
  }

  async exibirAlertaFavorito(ator: IAtor) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            ator.favorito = false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
};
