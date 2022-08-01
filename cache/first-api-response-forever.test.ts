import { shareReplay } from 'rxjs';

import { api } from '../testing/api';

describe('cache the first value', () => {

  test('caches the first api response forever', () => {

    const api$ = api(['-a-|', '-b-|']);

    // implementation
    const cache$ = api$.pipe(
      shareReplay({ bufferSize: 1, refCount: false }),
    );

    expect(cache$).toBeMarble('-a-|');
    expect(cache$).toBeMarble('-a-|');
  });

});
