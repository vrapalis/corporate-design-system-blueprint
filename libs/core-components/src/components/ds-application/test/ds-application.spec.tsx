import { newSpecPage } from '@stencil/core/testing';
import { DsApplication } from '../ds-application';

describe('ds-application', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsApplication],
      html: `<ds-application></ds-application>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-application>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-application>
    `);
  });
});
