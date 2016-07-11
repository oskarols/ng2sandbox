import {Injectable} from "@angular/core";
import {Store, Action} from "@ngrx/store";
import {StateUpdates, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";

@Injectable()
export class TestEffects {
  constructor(private stateUpdate$: StateUpdates<any>) {

  }

  @Effect() dotest = this.stateUpdate$
    .whenAction('TESTING')
    .do(() => console.log('foobar'));
}
