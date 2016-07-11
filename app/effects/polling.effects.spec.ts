import {Observable} from 'rxjs/Observable';
import {provideStore, Store, Dispatcher} from '@ngrx/store';
import {Injector, Provider, ReflectiveInjector, provide} from '@angular/core';
import {
    MOCK_EFFECTS_PROVIDERS,
    MockStateUpdates
} from '@ngrx/effects/testing';


import {POLL_BOOKS, POLL_BOOKS_STOP, POLL_BOOKS_START} from './../reducers/polling';
import {PollingEffects} from './polling.effects';
import {AsyncScheduler} from 'rxjs/Scheduler/AsyncScheduler';
import {TestScheduler} from 'rxjs/testing/TestScheduler';
import {async,it,describe,expect,inject,beforeEach,beforeEachProviders} from '@angular/core/testing';
import { filter } from 'rxjs/operator/filter';
import * as _ from 'lodash';


function stringify(x): string {
  return JSON.stringify(x, function (key, value) {
    if (Array.isArray(value)) {
      return '[' + value
        .map(function (i) {
          return '\n\t' + stringify(i);
        }) + '\n]';
    }
    return value;
  })
  .replace(/\\"/g, '"')
  .replace(/\\t/g, '\t')
  .replace(/\\n/g, '\n');
}

function deleteErrorNotificationStack(marble) {
  const { notification } = marble;
  if (notification) {
    const { kind, exception } = notification;
    if (kind === 'E' && exception instanceof Error) {
      notification.exception = { name: exception.name, message: exception.message };
    }
  }
  return marble;
}

/**
 * custom assertion formatter for expectObservable test
 */

function observableMatcher(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    actual = actual.map(deleteErrorNotificationStack);
    expected = expected.map(deleteErrorNotificationStack);
    const passed = _.isEqual(actual, expected);
    if (passed) {
      return;
    }

    // Make a pretty error message
    let message = '\nExpected \n';
    actual.forEach((x) => message += `\t${stringify(x)}\n`);

    message += '\t\nto deep equal \n';
    expected.forEach((x) => message += `\t${stringify(x)}\n`);

    expect(passed).toEqual(true, message);

    // chai.assert(passed, message);
  } else {
    expect(_.isEqual(actual, expected)).toBe(true);
    // chai.assert.deepEqual(actual, expected);
  }
}

describe('Polling Effect Load', () => {
    let pollingEffects: PollingEffects;
    let mainState$: any;
    let asyncScheduler: AsyncScheduler;
    let testScheduler: TestScheduler;
    let values = {
      x: {action: {type: POLL_BOOKS_START}},
      y: {action: {type: POLL_BOOKS}}
    };


    // beforeEachProviders(() => [
    //     // {provide: AsyncScheduler, useClass: AsyncScheduler},
    //     AsyncScheduler,
    //     ...MOCK_EFFECTS_PROVIDERS,
    //     PollingEffects
    // ]);

    beforeEach(function () {

        testScheduler = new TestScheduler(observableMatcher);

        mainState$ = testScheduler.createHotObservable("^-----x---------------|", values);

        // const injector = ReflectiveInjector.resolveAndCreate([
        //     MOCK_EFFECTS_PROVIDERS
        //     // {provide: AsyncScheduler, useFactory: () => { return AsyncScheduler; }}
        // ]);

        // let childInjector = injector.resolveAndCreateChild([PollingEffects]);

        // let scheduler = injector.get(AsyncScheduler);

        pollingEffects = new PollingEffects(mainState$, testScheduler);

        // pollingEffects = childInjector.get(PollingEffects);

        // console.log(pollingEffects);
        // updates$ = injector.get(Observable);
        // asyncScheduler = injector.get(AsyncScheduler);


        // updates$.prototype.whenAction = function(...actionTypes: string[]): Observable<any> {
        //   return filter.call(this,
        //     ({ action }: StateUpdate<any>) => actionTypes.indexOf(action.type) > -1
        //   );
        // }
    });

    it('should continously poll', (done) => {
        let poller = pollingEffects.makePoller(mainState$);

        testScheduler.expectObservable(poller).toBe("^-----x-----y-----y-----|", values);
        // updates$.sendAction({ type: fromProducts.REQUEST_PRODUCTS });
        //
        // shop.load$
        //     .filter(Boolean)
        //     .subscribe(last => {
        //         expect(last).toEqual({ type: fromProducts.RECEIVED_PRODUCTS, payload: jsonProducts });
        //         done();
        //     });
        // done();
        testScheduler.flush();
        done();
    });

    // it('should checkout products', (done) => {
    //
    //     // updates$.sendAction({ type: CHECKOUT_REQUEST, payload: [0, 1] });
    //     //
    //     // shop.checkout$
    //     //     .filter(Boolean)
    //     //     .subscribe(last => {
    //     //         expect(last).toEqual({ type: CHECKOUT_SUCCESS, payload: 0 });
    //     //         done();
    //     //     });
    //     done();
    // });
});
