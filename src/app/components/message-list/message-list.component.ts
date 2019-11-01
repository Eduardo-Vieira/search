import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnChanges {
  
  @Input() message:String;
  public _message:String;

  constructor() { }
  
  ngOnChanges(changes:SimpleChanges): void {
      this._message = changes.message.currentValue;
  }
}
