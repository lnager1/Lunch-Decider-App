import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RestaurantListPageComponent } from './pages/restaurant-list-page/restaurant-list-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'restaurant-list-page', component: RestaurantListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
