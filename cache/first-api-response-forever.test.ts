import { shareReplay } from 'rxjs';
import { api } from '../testing/api';

test('caches the first api response forever', () => {

  const api$ = api(['-a-|', '-b-|']);

  const cache$ = api$.pipe(
    shareReplay({ bufferSize: 1, refCount: false }),
  );

  expect(cache$).toBeMarble('-a-|');
  expect(cache$).toBeMarble('-a-|');
});
