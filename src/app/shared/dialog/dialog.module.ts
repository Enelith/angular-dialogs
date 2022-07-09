import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentDialogDirective } from './component-dialog/component-dialog.directive';

import { MaterialModule } from '@app/utils/material/material.module';

import { RegularDialogComponent} from './regular-dialog/regular-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ComponentDialogComponent } from './component-dialog/component-dialog.component';

@NgModule({
  declarations: [
    RegularDialogComponent,
    ConfirmationDialogComponent,
    ComponentDialogComponent,
    ComponentDialogDirective
  ],
  imports: [
    CommonModule,
    
    MaterialModule,
  ],
  exports: [
    RegularDialogComponent,
    ConfirmationDialogComponent
  ]
})
export class DialogModule { }