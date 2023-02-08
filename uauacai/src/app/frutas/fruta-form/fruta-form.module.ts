import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutaFormPageRoutingModule } from './fruta-form-routing.module';

import { FrutaFormPage } from './fruta-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutaFormPageRoutingModule
  ],
  declarations: [FrutaFormPage]
})
export class FrutaFormPageModule {}
