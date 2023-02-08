import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DatabaseService } from './care/service/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router, 
    private platform: Platform, 
    private db: DatabaseService
  ) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      //abrir a tela com a logo do app
      //this.router.navigateByUrl('splash');

      //vai chamar o metodo, assim que o app for iniciado
      this.db.openDataBase();
    });
  }
}
