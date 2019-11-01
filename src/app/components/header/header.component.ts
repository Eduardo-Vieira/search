import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() searchInput = new EventEmitter();

  constructor() {}
  
  search(e:any): void {
    this.searchInput.emit(e.target.value);
  }
}
