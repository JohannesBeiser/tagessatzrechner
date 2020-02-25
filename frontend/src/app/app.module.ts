import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AddComponent } from './screens/add/add.component';
import { HomeComponent } from './screens/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { GroupsComponent } from './screens/groups/groups.component';
import { SearchComponent } from './screens/search/search.component';
import {MatChipsModule} from '@angular/material/chips';
import { FilterComponent } from './screens/filter/filter.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { registerLocaleData, DatePipe } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { PrettyCurrencyPipe } from './pipes/pretty-currency.pipe';
registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    GroupsComponent,
    SearchComponent,
    FilterComponent,
    PrettyCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DatePipe,
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
