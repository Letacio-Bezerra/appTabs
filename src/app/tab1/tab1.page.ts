import { NavigationExtras, Router } from '@angular/router'
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(public router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w1280/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficcao cientifica', 'Açao'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Obsessão (2026)',
      lancamento: '14/05/2026 (BR)',
      duracao: '1h40m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w1280/wUc6IDf5ChjM1UyQye21qFBeJY0.jpg',
      generos: ['Terror', 'Thriller'],
      pagina: '/obsessao',
      favorito: false
    },
    {
      nome: 'Backrooms: Um Não-Lugar (2026)',
      lancamento: '28/05/2026 (BR)',
      duracao: '1h50m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w1280/a1pgQeEge47xrS4jGlDwIHiieVK.jpg',
      generos: ['Terror', 'Mistério', 'Ficção científica'],
      pagina: '/backrooms',
      favorito: false
    },
    {
      nome: 'Whiplash: Em Busca da Perfeição (2014)',
      lancamento: '08/01/2015 (BR)',
      duracao: '1h47m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w1280/z693uKD7j3zcdX0zVMQPIA3cSZf.jpg',
      generos: ['Drama', 'Música', 'Thriller'],
      pagina: '/whiplash',
      favorito: false
    },
  ];

  exibirFilme(filme: IFilme) {
    const NavigationExtras: NavigationExtras = { state: { paramFilme: filme } };
    this.router.navigate(['filme-detalhe'], NavigationExtras);
  };

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito = false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}