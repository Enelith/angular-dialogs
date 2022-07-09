import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-regular-dialog',
  templateUrl: './regular-dialog.component.html',
  styleUrls: ['./regular-dialog.component.scss']
})
export class RegularDialogComponent implements OnInit {
  defaultCancelButtonMessage: string = 'Fermer';

  constructor(
    @Inject(MAT_DIALOG_DATA) public message: string,
    private dialogRef: MatDialogRef<RegularDialogComponent>) {

  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}