import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoberturaFormPageRoutingModule } from './cobertura-form-routing.module';

import { CoberturaFormPage } from './cobertura-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoberturaFormPageRoutingModule
  ],
  declarations: [CoberturaFormPage]
})
export class CoberturaFormPageModule {}
