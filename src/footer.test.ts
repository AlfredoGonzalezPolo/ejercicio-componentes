import { footer } from './footer.ts';

test('Should first', () => {

    expect(footer).toContain('footer');

  expect(footer).toContain('Isdi Coders');
});
