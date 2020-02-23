import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './screens/add/add.component';
import { HomeComponent } from './screens/home/home.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupsComponent } from './screens/groups/groups.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'settings', component: SettingsComponent, data: {animation: 'Settings'}  },
  { path: 'groups', component: GroupsComponent ,data: {animation: 'Groups'}},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
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
