import { Injectable, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ComponentDialogComponent } from './component-dialog/component-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { RegularDialogComponent } from './regular-dialog/regular-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  openComponentDialog(componentRef: Type<any>, dataRef: any) {
    const dialogRef = this.matDialog.open(
      ComponentDialogComponent, 
      {
        //width: '350px',
        panelClass: 'w75',
        data: {
          component: componentRef,
          dataInject: dataRef
        }
      });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          console.log("Action on result = true");
        }
      });
  }

  openConfirmationDialog(id: number, name: string): void {
    const dialogRef = this.matDialog.open(
      ConfirmationDialogComponent, 
      {
        panelClass: 'w50',
        data: {
          title: 'Demande de Confirmation',
          mainMessage: 'Voulez-vous supprimer l\'application suivante ?',
          emphMessage: '#' + id + ' ' + name ,
          cssClass: 'warning-validation'
        }
      });

    dialogRef.afterClosed()
      .subscribe((result) => {
        if (result) {
          console.log("Action on result = true");
        }
      });
  }

  openRegularDialog(message: string): void {
    const dialogRef = this.matDialog.open(RegularDialogComponent, {
      //width: '350px',
      panelClass: 'w50',
      data: message
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          console.log("Action on result = true");
        }
      });
  }
}