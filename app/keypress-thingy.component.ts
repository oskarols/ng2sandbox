import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';

@Component({
    selector: 'keypress-thingy',
    template: `
        <h1>I'm an a-press-a!</h1>
        <input (keydown)="pressedKey($event)" />
    `
})
export class KeypressThingyComponent implements OnInit {
    keyPresses: Subject<KeyboardEvent>;

    constructor() {
        this.keyPresses = Subject.create();

        this.keyPresses.subscribe(() => {
            console.log('Received value inside keyPresses');
        })
    }

    pressedKey(event: KeyboardEvent) {
        console.log(event.keyCode);
        this.keyPresses.next(event);
    }

    ngOnInit() {


    }
}
