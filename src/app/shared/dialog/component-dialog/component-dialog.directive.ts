import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[componentDialogHost]',
})
export class ComponentDialogDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}