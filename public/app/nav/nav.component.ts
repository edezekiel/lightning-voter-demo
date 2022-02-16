import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

/* This grabs the AngularJS <nav></nav> component and 
generates an Angular component. The Angular component
can now be used from <profile></profile> without having
to upgrade <nav></nav> itself.*/
@Directive({
  selector: 'app-nav',
})
export class NavComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('nav', elementRef, injector);
  }
}
