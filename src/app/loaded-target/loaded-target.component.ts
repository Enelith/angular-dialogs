import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { InjectedComponent } from '@app/shared/interface/injected.interface';

import { DetailPiece } from '@app/models/detail-piece.model';
import { Piece } from '@app/models/piece.model';

import { UtilsService } from '@app/services/utils.service';


const ELEMENT_DATA: DetailPiece[] = [];

@Component({
  selector: 'app-loaded-target',
  templateUrl: './loaded-target.component.html',
  styleUrls: ['./loaded-target.component.scss']
})
export class LoadedTargetComponent implements OnInit, InjectedComponent {
  @Input() data: Piece;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = [
    'dateCreation',
    'libelle',
    'debit',
    'credit'
  ];
  displayedFooterColumns: string[] = [
    'dateCreation',
    'debit',
    'credit'
  ];

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data?.detail);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  checkDataSource() {
    return this.dataSource && !this.utilsService.isEmptyObject(this.dataSource.data);
  }

  toNumber(value: string | undefined) {
    let result = 0;
    if (value) {
      result = this.utilsService.convertToNumber(value);
    }
    return result;
  }

  /** Gets the total cost of all transactions. */
  getTotalDebit() {
    let result = 0;
    if (this.data && this.data.detail) {
      result = this.data?.detail
              .map(detail => this.toNumber(detail.debit))
              .reduce((acc, value) => acc + value, 0);
    }
    return result;
  }

  /** Gets the total cost of all transactions. */
  getTotalCredit() {
    let result = 0;
    if (this.data && this.data.detail) {
      result = this.data?.detail
              .map(detail => this.toNumber(detail.credit))
              .reduce((acc, value) => acc + value, 0);
    }
    return result;
  }
}
