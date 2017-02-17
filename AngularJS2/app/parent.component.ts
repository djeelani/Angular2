import {Component } from '@angular/core';
import { ChildComponent }   from './child.component';
@Component({
  selector: 'parent-selector',
  template: `<div>  
                <h1>I'm a container component</h1>
                <child-selector [title]='childtitle' ></child-selector>
            </div>`,
  
})
export class ParentComponent {  
  // onNotify(message:string):void {
  //   alert(message);
  // }
  childtitle: string= "this message from parent";
}