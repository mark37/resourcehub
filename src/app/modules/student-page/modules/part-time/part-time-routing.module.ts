import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartTimeComponent } from './part-time.component';

const routes: Routes = [{ path: '', component: PartTimeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartTimeRoutingModule { }
