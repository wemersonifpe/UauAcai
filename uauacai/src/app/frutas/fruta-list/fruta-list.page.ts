import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Fruta } from '../shared/fruta';
import { FrutaService } from '../shared/fruta.service';

@Component({
  selector: 'app-fruta-list',
  templateUrl: './fruta-list.page.html',
  styleUrls: ['./fruta-list.page.scss'],
})
export class FrutaListPage implements OnInit {
  frutas: Fruta[] = [];

  constructor(private frutaService: FrutaService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loadFrutas();
  }

  async loadFrutas(){
    this.frutas = await this.frutaService.getAll();
  }

  doSearchClear(){
    this.loadFrutas();
  }

  async doSerchBarChange($event: any){
    const value = $event.target.value;
    if(value && value.length >= 2){
      this.frutas = await this.frutaService.filter(value);
    }
  }

  async delete(fruta: Fruta){
    const alert = await this.alertCtrl.create({
      header: 'Deletar?',
      message: `Deseja excluir a fruta: ${fruta.nome}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cacel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.executDelete(fruta);
          }
        }
      ]
    })

  }

  async executDelete(fruta: Fruta){
    try {
      //removendo do banco de dados
      await this.frutaService.delete(fruta.id);

      //removendo do array 
      const index = this.frutas.indexOf(fruta);
      this.frutas.splice(index, 1);

      const toast = await this.toastCtrl.create({
        header: 'Sucesso',
        message: 'Fruta excluida com sucesso',
        color: 'sucess',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    } catch (error) {
      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Ocorreu um erro ao tentar excluir a fruta.',
        color: 'danger',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    }

  }

}
