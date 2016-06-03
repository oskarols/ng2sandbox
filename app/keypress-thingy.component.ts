import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';

function keyCodeToChar(keycode: number) : string {
    return String.fromCharCode(keycode);
}

@Component({
    selector: 'keypress-thingy',
    template: `
        <h1>I'm an a-press-a!</h1>
        <input (keydown)="pressedKey($event)" />
        <ul>
            <li *ngFor="let key of allKeysPressed">{{key}}</li>
        </ul>
    `
})
export class KeypressThingyComponent implements OnInit {
    keyEventPresses: Subject<KeyboardEvent>;
    keyPresses: Observable<string>;
    allKeysPressed: string[] = [];

    constructor() {

        this.keyEventPresses = Subject.create();
        this.keyPresses = this.keyEventPresses.map((event) => keyCodeToChar(event.keyCode));

        this.keyEventPresses.subscribe(() => {
            console.log('Received value inside keyPresses');
        })

        this.keyPresses.subscribe((key) => {
            this.allKeysPressed.push(key);
        })
    }

    pressedKey(event: KeyboardEvent) {
        console.log(event.keyCode);
        this.keyEventPresses.next(event);
    }

    ngOnInit() {


    }
}
