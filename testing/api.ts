import { cold } from 'jest-marbles';
import { Observable } from 'rxjs';

export function api<T>(marblesForResponses: string[]): Observable<T> {
  const observables = marblesForResponses.map(marbles => cold(marbles));
  let index = 0;
  return new Observable((subscriber => {
    const subscription = observables[index++ % observables.length].subscribe(subscriber);
    return () => subscription.unsubscribe();
  }));
}
