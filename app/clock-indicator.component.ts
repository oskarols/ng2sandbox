import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'clock-indicator',
    template: `
        <p>
            Time: {{clock | async}}
        </p>
    `
})
export class ClockIndicatorComponent {
    localTime: string = "";
    clock: Observable<number> = Observable.interval(1000);1

    constructor() {

    }

}
