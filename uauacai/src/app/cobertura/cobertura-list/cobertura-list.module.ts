import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoberturaListPageRoutingModule } from './cobertura-list-routing.module';

import { CoberturaListPage } from './cobertura-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoberturaListPageRoutingModule
  ],
  declarations: [CoberturaListPage]
})
export class CoberturaListPageModule {}
