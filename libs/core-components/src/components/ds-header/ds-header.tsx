import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-header',
  styleUrl: 'ds-header.css',
  shadow: true,
})
export class DsHeader {

  render() {
    return (
      <Host>
        <header>
          <label>
            <slot></slot>
          </label>
          <nav>
            <ul>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 2</a>
              </li>
              <li>
                <a>Link 2</a>
              </li>
            </ul>
          </nav>
        </header>
      </Host>
    );
  }

}
