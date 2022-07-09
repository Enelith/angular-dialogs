import { Component, OnInit, OnDestroy, Inject, Type, ViewChild} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ComponentDialogDirective } from './component-dialog.directive';

import { InjectedComponent } from '@app/shared/interface/injected.interface';

export interface ComponentDialogData {
  component: Type<any>;
  dataInject: any;
}

@Component({
  selector: 'app-component-dialog',
  templateUrl: './component-dialog.component.html',
  styleUrls: ['./component-dialog.component.scss']
})
export class ComponentDialogComponent implements OnInit, OnDestroy {
  defaultCancelButtonMessage: string = 'Fermer';

  @ViewChild(ComponentDialogDirective, {static: true}) componentDialogHost!: ComponentDialogDirective;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ComponentDialogData,
    private dialogRef: MatDialogRef<ComponentDialogComponent>) { 

  }

  ngOnInit(): void {
    this.loadComponent();
  }

  ngOnDestroy() {

  }

  loadComponent() {
    const viewContainerRef = this.componentDialogHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<InjectedComponent>(this.data.component);
    componentRef.instance.data = this.data.dataInject;
  }
}
