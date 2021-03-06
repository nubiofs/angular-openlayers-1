import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicSetupComponent } from 'projects/basic-setup/src/public_api';
import { OlProjSetupComponent } from 'projects/ol-proj-setup/src/public_api';
import { CustomMarkersComponent } from 'projects/custom-markers/src/public_api';
import { SimplePopupComponent } from 'projects/simple-popup/src/public_api';

const routes: Routes = [
  {
    path: 'basic-setup',
    component: BasicSetupComponent
  },
  {
    path: 'ol-proj-setup',
    component: OlProjSetupComponent
  },
  {
    path: 'custom-markers',
    component: CustomMarkersComponent
  },
  {
    path: 'simple-popup',
    component: SimplePopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
