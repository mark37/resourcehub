import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicateComponent } from './communicate.component';

const routes: Routes = [{ path: '', component: CommunicateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicateRoutingModule { }
