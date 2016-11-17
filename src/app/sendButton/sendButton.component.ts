import { Component, OnInit } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'sendButton',
    templateUrl: 'sendButton.component.html',
})
export class SendButtonComponent implements OnInit {

    sendButtonName:String = '提交送出';

    constructor() { }

    ngOnInit() { }
}