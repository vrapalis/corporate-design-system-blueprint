import { newSpecPage } from '@stencil/core/testing';
import { DsHeader } from '../ds-header';

describe('ds-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsHeader],
      html: `<ds-header></ds-header>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-header>
    `);
  });
});
