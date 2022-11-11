import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { TripComponent } from './trip/trip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import{ MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from '@angular/material/sort'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StationComponent } from './station/station.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TripComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule,MatTableModule,MatPaginatorModule,MatFormFieldModule,MatSortModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
