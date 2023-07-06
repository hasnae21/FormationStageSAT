import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { createPopper } from '@popperjs/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatDividerModule,
    MatButtonModule,

    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
