import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-footer',
  styleUrl: 'ds-footer.css',
  shadow: true,
})
export class DsFooter {

  render() {
    return (
      <Host>
        <footer>
          <label>
            <slot></slot>
          </label>
        </footer>
      </Host>
    );
  }

}
