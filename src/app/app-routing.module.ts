import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layouts/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpsertPatientComponent } from './registration/upsert/upsert-patient.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full' 
  }, 
  { 
    path: 'auth', 
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) 
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent 
      },
      {
        path: 'patient-registration',
        component: UpsertPatientComponent
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'auth/login' 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
