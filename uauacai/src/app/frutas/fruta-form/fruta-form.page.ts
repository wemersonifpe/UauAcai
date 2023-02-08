import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Fruta } from '../shared/fruta';
import { FrutaService } from '../shared/fruta.service';

@Component({
  selector: 'app-fruta-form',
  templateUrl: './fruta-form.page.html',
  styleUrls: ['./fruta-form.page.scss'],
})
export class FrutaFormPage implements OnInit {
  title: string = 'Nova fruta';
  fruta: Fruta;

  constructor(
    private frutaService: FrutaService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.fruta = new Fruta();

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam){
      this.title = 'Editar fruta';
      this.loadFruta(parseInt(idParam));
    }
  }

  async loadFruta(id: number){
    this.fruta = await this.frutaService.getById(id);
  }

  async onSubmit(){
    try {
      const result = await this.frutaService.save(this.fruta);
      this.fruta.id = result.insertId;

      const toast = await this.toastCtrl.create({
        header: 'Sucesso',
        message: 'Fruta salva com sucesso.',
        color: 'success',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
      
    } catch (error) {
      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Ocorreu um erro ao tentar salvar a Fruta.',
        color: 'danger',
        position: 'bottom',
        duration: 3000
      });

      toast.present();
    }
    
  }

}
