import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'splash', loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)},
  { path: 'fruta-form', loadChildren: () => import('./frutas/fruta-form/fruta-form.module').then( m => m.FrutaFormPageModule)},
  { path: 'fruta-list', loadChildren: () => import('./frutas/fruta-list/fruta-list.module').then( m => m.FrutaListPageModule)},
  */

  { path: 'frutas', loadChildren: () => import('./frutas/fruta-list/fruta-list.module').then( m => m.FrutaListPageModule)},
  { path: 'frutas/new', loadChildren: () => import('./frutas/fruta-form/fruta-form.module').then( m => m.FrutaFormPageModule)},
  { path: 'frutas/edit/id', loadChildren: () => import('./frutas/fruta-form/fruta-form.module').then( m => m.FrutaFormPageModule)},

  //{ path: 'frutas/new', loadChildren: './frutas/fruta-form/fruta-form.module#FrutaFormPageModule' },
  /*{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },*/
  { path: '', 
    redirectTo: 'frutas',
    pathMatch: 'full'},
  {
    path: 'cobertura-form',
    loadChildren: () => import('./cobertura/cobertura-form/cobertura-form.module').then( m => m.CoberturaFormPageModule)
  },
  {
    path: 'cobertura-list',
    loadChildren: () => import('./cobertura/cobertura-list/cobertura-list.module').then( m => m.CoberturaListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
