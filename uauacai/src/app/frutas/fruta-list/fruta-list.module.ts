import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutaListPageRoutingModule } from './fruta-list-routing.module';

import { FrutaListPage } from './fruta-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutaListPageRoutingModule
  ],
  declarations: [FrutaListPage]
})
export class FrutaListPageModule {}
