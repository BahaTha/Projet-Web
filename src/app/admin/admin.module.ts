import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SessionItemListComponent } from '../session-item-list/session-item-list.component';


import { SessionItemModule } from '../session-item.module';
import { AdminComponent } from './admin/admin.component';
import { FakeSessionItemService } from './fake-session-item.service';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';

const adminRoutes: Routes = [
  {
  path: '',
  component: AdminComponent,
  children: [
    { path: 'add', component: SessionAddFormComponent },
    { path: 'edit/:id', component:
    SessionEditFormComponent },
    { path: 'list', component: SessionItemListComponent
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
    ],
    }
    ];
@NgModule({
 
  imports:[RouterModule.forChild(adminRoutes),
    CommonModule,
    SessionItemModule,
    FormsModule],
  declarations: [AdminComponent,SessionAddFormComponent,SessionEditFormComponent],
  providers: [FakeSessionItemService],
  bootstrap : [AdminComponent]
  
})
export class AdminModule { }
