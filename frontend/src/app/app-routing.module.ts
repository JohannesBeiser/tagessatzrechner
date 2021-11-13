import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './screens/add/add.component';
import { HomeComponent } from './screens/home/home.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupsComponent } from './screens/groups/groups.component';
import { IncomeComponent } from './screens/income/income.component';
import { AnalysisComponent } from './screens/analysis/analysis.component';
import { RecurringComponent } from './screens/settings/recurring/recurring.component';
import { DefaultsComponent } from './screens/settings/defaults/defaults.component';
import { GeneralComponent } from './screens/settings/general/general.component';
import { GroupSettingsComponent } from './screens/settings/group-settings/group-settings.component';
import { CategorySettingsComponent } from './screens/settings/category-settings/category-settings.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'settings', component: SettingsComponent, data: {animation: 'Settings'}  },
  { path: 'settings/recurring', component: RecurringComponent, data: {animation: 'RecurringSettings'}  },
  { path: 'settings/groups', component: GroupSettingsComponent, data: {animation: 'GroupsSettings'}  },
  { path: 'settings/categories', component: CategorySettingsComponent, data: {animation: 'CategorySettings'}  },
  { path: 'settings/defaults', component: DefaultsComponent, data: {animation: 'DefaultsSettings'}  },
  { path: 'settings/general', component: GeneralComponent, data: {animation: 'GeneralSettings'}  },
  { path: 'income', component: IncomeComponent, data: {animation: 'Income'}  },
  { path: 'analysis', component: AnalysisComponent, data: {animation: 'Analysis'}  },
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
