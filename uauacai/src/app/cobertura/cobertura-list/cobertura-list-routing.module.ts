import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoberturaListPage } from './cobertura-list.page';

const routes: Routes = [
  {
    path: '',
    component: CoberturaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoberturaListPageRoutingModule {}
