import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPageComponent } from './student-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'scholarship',
        loadChildren: () => import('./modules/scholarship/scholarship.module').then(m => m.ScholarshipModule)
      },
      {
        path: 'part-time',
        loadChildren: () => import('./modules/part-time/part-time.module').then(m => m.PartTimeModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./modules/history/history.module').then(m => m.HistoryModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentPageRoutingModule {
}
