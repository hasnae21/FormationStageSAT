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
import { DefaultHomeComponent } from './default-home/default-home.component';
import { PendingTasksComponent } from './pending-tasks/pending-tasks.component';

import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultHomeComponent,
    PendingTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
