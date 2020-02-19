import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './screens/add/add.component';
import { HomeComponent } from './screens/home/home.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'add', component: AddComponent },
  { path: 'home', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'settings', component: SettingsComponent, data: {animation: 'Settings'}  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
