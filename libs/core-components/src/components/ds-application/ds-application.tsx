import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'ds-application',
  styleUrl: 'ds-application.css',
  shadow: true,
})
export class DsApplication {
  @Prop() headerTitle: string;
  @Prop() footerTitle: string;

  render() {
    return (
      <Host>
        <ds-header>{this.headerTitle}</ds-header>
        <main>
          <slot></slot>
        </main>
        <ds-footer>{this.footerTitle}</ds-footer>
      </Host>
    );
  }

}
