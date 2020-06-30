import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { DashboardComponent} from './dashboard/dashboard/dashboard.component';
import { ImageInfoComponent } from './image-info/image-info.component'


const routes: Routes = [
{path: '', component : HomeComponent},
{path: 'dashboard', component : DashboardComponent},
// { path : 'dashboard', component : DashboardComponent},
{path: 'screenshots', component : ImageInfoComponent}
// {path: 'screenshots/:public_id', component : ImageInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
