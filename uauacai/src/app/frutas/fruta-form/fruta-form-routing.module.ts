import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutaFormPage } from './fruta-form.page';

const routes: Routes = [
  {
    path: '',
    component: FrutaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutaFormPageRoutingModule {}
