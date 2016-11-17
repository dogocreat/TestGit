import { Directive,ElementRef,Renderer } from '@angular/core';

@Directive({
    // moduleId: module.id,
    selector: '[sendButtonEvent]',
    host:{
        '(click)':'onClick()'
    }
})
export class SendButtonDirective {

    successMsg:String = "提交成功";
    failMsg:String = "提交成功";

    constructor(el: ElementRef, renderer: Renderer) {
     }

    onClick(){
        // console.log("aaaa")
        alert(this.successMsg);
    }
}