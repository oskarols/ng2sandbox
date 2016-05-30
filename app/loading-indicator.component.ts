import {Component, Input} from '@angular/core';

@Component({
    template: `
        <div *ngIf="!resource"><b>I'm loading!</b></div>
    `,
    selector: 'loading-indicator'
})
export class LoadingIndicator {
    @Input()
    resource: any
}
