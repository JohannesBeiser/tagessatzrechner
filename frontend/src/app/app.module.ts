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
import { PrettyCurrencyPipe } from './pipes/pretty-currency.pipe';
import { DatePipe } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { DateDurationPipe } from './pipes/date-duration.pipe';
import { DateLongShortPipe } from './pipes/date-long-short.pipe';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { EditComponent } from './screens/edit/edit.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ExpenseBottomSheetComponent } from './components/expense-list/expense-bottom-sheet/expense-bottom-sheet.component';
import { SettingsBottomSheetComponent } from './screens/settings/settings-bottom-sheet/settings-bottom-sheet.component';
import {MatTabsModule} from '@angular/material/tabs';

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
    PrettyCurrencyPipe,
    DateDurationPipe,
    DateLongShortPipe,
    ExpenseListComponent,
    EditComponent,
    ExpenseBottomSheetComponent,
    SettingsBottomSheetComponent
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
    MatTabsModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
