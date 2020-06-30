import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './dashboard/favorite/favorite.component';
import { MyUploadsComponent } from './dashboard/my-uploads/my-uploads.component';
import { ProfileDetailsComponent } from './dashboard/profile-details/profile-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FavoriteComponent, MyUploadsComponent, ProfileDetailsComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],

})
export class DashboardModule { }
