import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmationData {
  title: string;
  mainMessage: string;
  emphMessage: string;
  subMessage: string;
  cancelButtonMessage: string;
  confirmButtonMessage: string;
  cssClass: string
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  defaultCancelButtonMessage: string = 'Annuler';
  defaultConfirmButtonMessage: string = 'Je confirme';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationData,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {

  }

  ngOnInit(): void {
  }

}