import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  {
    path: 'facade', loadChildren: () => import('./facade/facade.module').then(m => m.FacadeModule)
  },
  {
    path: 'users', loadComponent: () => import('./users/users.component').then(m => m.UsersComponent)
  },
  {
    path:'fire',loadChildren:()=>import('./fire/fire.module').then(m=>m.FireModule)
  },
  {
    path:'glass',loadChildren:()=>import('./glass/glass.module').then(m=>m.GlassModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
