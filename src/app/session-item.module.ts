import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './session-item/inscription-disabled-directive.directive';
import { SessionItemComponent } from './session-item/session-item.component';
@NgModule({
  imports : [CommonModule],
  declarations: [
    SessionItemComponent,SessionItemListComponent,InscriptionDisabledDirective
  ],
  exports: [
   SessionItemComponent,SessionItemListComponent,InscriptionDisabledDirective
  ]
})
export class SessionItemModule { }