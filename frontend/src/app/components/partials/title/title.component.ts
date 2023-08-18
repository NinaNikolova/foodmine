import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

@Input()
title!:string;

@Input()
margin?:'1.5rem 0 0 2.5rem';

@Input()
fontSize?:'1.7rem';

}
