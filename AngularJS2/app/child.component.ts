import { Component } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'child-selector',
  template: `<h2>Hi, I'm a nested component</h2>  
  {{title}}
           `
})
export class ChildComponent {  
  //@Output() notify: EventEmitter<string> = new EventEmitter<string>();
 @Input() title:string
  // onClick() {
  //   this.notify.emit('Click from nested component');
  // }
}