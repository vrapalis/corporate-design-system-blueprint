import {newSpecPage} from '@stencil/core/testing';
import {DsApplication} from '../ds-application';

describe('ds-application', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsApplication],
      html: `<ds-application></ds-application>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-application>
        <mock:shadow-root>
         <ds-header></ds-header>
          <main>
            <slot></slot>
          </main>
          <ds-footer></ds-footer>
        </mock:shadow-root>
      </ds-application>
    `);
  });
});
