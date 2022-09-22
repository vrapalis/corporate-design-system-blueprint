/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@vrapalis/core-components';




export declare interface DsApplication extends Components.DsApplication {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['footerTitle', 'headerTitle']
})
@Component({
  selector: 'ds-application',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['footerTitle', 'headerTitle']
})
export class DsApplication {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsFooter extends Components.DsFooter {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ds-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class DsFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsHeader extends Components.DsHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ds-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class DsHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
