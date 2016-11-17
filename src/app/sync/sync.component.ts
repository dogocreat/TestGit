import { Component, OnInit } from '@angular/core';
@Component({
    // moduleId: module.id,
    selector: 'sync',
    // templateUrl: 'sync.component.html'
    templateUrl: './sync.component.html'
})
export class SyncComponent implements OnInit {

    titleArr:String[] = ['帳號','密碼','姓名','E-Mail'];

    constructor() { }

    ngOnInit() { }
}