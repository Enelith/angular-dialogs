import { Component, OnInit } from '@angular/core';

import { LoadedTargetComponent } from './loaded-target/loaded-target.component';

import { DetailPiece } from '@app/models/detail-piece.model';
import { Piece } from '@app/models/piece.model';

import { DialogService } from '@app/shared/dialog/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-dialogs';
  
  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openRegularDialog() {
    this.dialogService.openRegularDialog('Opened a Regular Dialog');
  }

  openConfirmationDialog() {
    this.dialogService.openConfirmationDialog(999, 'AZERTY');
  }

  openComponentDialog() {
/*
numPiece: "138160"
typePiece: "FACTU"
libellePiece: "Avis échéance Gar. Fin. TRANSACTION"
naturePiece: "GF"
factureRCPNetanswer: "true"
factureBJMOD: "false"
dateExigibilitePiece: "03/01/2022"
dateCreationPiece: "03/01/2022"
debitPiece: "350,00"
creditPiece: ""
detail: [{
    numPieceParent: null
    libelle: "Assurance GF Tarification TI"
    dateCreation: "03/01/2022"
    debit: "350,00"
    credit: ""
}]
*/
    let detailPiece: DetailPiece = new DetailPiece(
      0,
      "Assurance GF Tarification TI",
      "03/01/2022",
      "350,00"
      );
    const piece: Piece = new Piece(
      "138160",
      "FACTU",
      "Avis échéance Gar. Fin. TRANSACTION",
      "GF",
      "true",
      "false",
      "03/01/2022",
      "03/01/2022",
      "350,00",
      "",
      [ detailPiece ]
      );
    this.dialogService.openComponentDialog(LoadedTargetComponent, piece);
  }
}
