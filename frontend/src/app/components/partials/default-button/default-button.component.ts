import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent {
@Input()
type: 'submit' | 'button' ='submit';
@Input()
text: string = 'Submit';
@Input()
bgColor='#e72929';
@Input()
color='while';
@Input()
fontSizeRem=1.3;
@Input()
widthRem=12;
// for passing event - output
@Output()
onClick=new EventEmitter()

}
