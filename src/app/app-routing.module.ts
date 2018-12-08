import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WhereToFindComponent } from './pages/where-to-find/where-to-find.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'onde-encontrar',
    component: WhereToFindComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
