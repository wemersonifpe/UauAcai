import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutaListPage } from './fruta-list.page';

const routes: Routes = [
  {
    path: '',
    component: FrutaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutaListPageRoutingModule {}
