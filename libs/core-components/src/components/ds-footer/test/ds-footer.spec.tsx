import { newSpecPage } from '@stencil/core/testing';
import { DsFooter } from '../ds-footer';

describe('ds-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsFooter],
      html: `<ds-footer></ds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-footer>
    `);
  });
});
