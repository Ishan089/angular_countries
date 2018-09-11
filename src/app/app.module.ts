import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegionsService } from './regions.service';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { HttpClientModule } from '@angular/common/http';
import { AllcountriesComponent } from './allcountries/allcountries.component';
import { HomeComponent } from './home/home.component';
import { CountryViewComponent } from './country-view/country-view.component';

const appRoutes: Routes = [

  { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "all-countries/:region", component: AllcountriesComponent },
      { path: "all-countries/:code", component: AllcountriesComponent },
      { path: "country-view/:name", component: CountryViewComponent },
      { path: "**", component: HomeComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    AllcountriesComponent,
    HomeComponent,
    CountryViewComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [RegionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
