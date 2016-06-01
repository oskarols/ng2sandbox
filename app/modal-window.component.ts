import {Component, Input, OnInit} from '@angular/core';

@Component({
    template: `
        <div style="border:5px solid green;">
            <h2>Modal Title</h2>
            <div style="border:2px solid yellow;">
                <ng-content select="modal-title"></ng-content>
            </div>
            <div style="border:5px solid blue;" class="modal-body">
                <ng-content select="modal-body"></ng-content>
            </div>
        </div>
    `,
    selector: 'modal-window'
})
export class ModalWindowComponent implements OnInit {
    ngOnInit() {
    }
}
