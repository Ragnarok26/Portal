import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mainDirective]'
})
export class MainDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
