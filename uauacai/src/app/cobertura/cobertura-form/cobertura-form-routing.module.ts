import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoberturaFormPage } from './cobertura-form.page';

const routes: Routes = [
  {
    path: '',
    component: CoberturaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoberturaFormPageRoutingModule {}
