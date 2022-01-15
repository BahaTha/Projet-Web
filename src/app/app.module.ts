import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';

import { SessionItemModule } from './session-item.module';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { InscriptionDisabledDirective } from './session-item/inscription-disabled-directive.directive';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
 
  declarations: [
    AppComponent,


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SessionItemModule,
    AdminModule,

  
   
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
