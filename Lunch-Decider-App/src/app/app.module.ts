import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RestaurantListPageComponent } from './pages/restaurant-list-page/restaurant-list-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SortComponent } from './components/sort/sort.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDisplayComponent } from './components/restaurant-display/restaurant-display.component';
import { SurpriseMeButtonComponent } from './components/surprise-me-button/surprise-me-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RestaurantListPageComponent,
    NavBarComponent,
    FiltersComponent,
    SortComponent,
    RestaurantListComponent,
    RestaurantDisplayComponent,
    SurpriseMeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
