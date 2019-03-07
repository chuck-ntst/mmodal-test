import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FluencyDirectComponent} from './fluency-direct/fluency-direct.component';
import {FluencyDirect2Component} from './fluency-direct2/fluency-direct2.component';
import { ClientPictureComponent } from './client-picture/client-picture.component';
// const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'fluencydirect', component: FluencyDirectComponent },
  { path: 'fluencydirect2', component: FluencyDirect2Component },
  { path: 'clientpicture', component: ClientPictureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
