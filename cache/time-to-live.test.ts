import { shareReplay } from 'rxjs';
import { fakeSchedulers } from 'rxjs-marbles/jest';

import { api } from '../testing/api';

describe('cache with time to live', () => {
  beforeEach(() => jest.useFakeTimers());

  it('should cache the response for the given amount of time (window time)', () => {
    fakeSchedulers(advance => {

      const windowTime = 1000;
      const api$ = api(['-a-|', '-b-|']);

      // implementation
      const cache$ = api$.pipe(
        shareReplay({ bufferSize: 1, windowTime, refCount: false }),
      );

      expect(cache$).toBeMarble('-a-|');
      expect(cache$).toBeMarble('-a-|');
      advance(windowTime);
      expect(cache$).toBeMarble('-b-|');
    });
  });

});
