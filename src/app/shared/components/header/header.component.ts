import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() showBtn: boolean = false;
  @Output() onLogout = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  logoutClicked(){
    this.onLogout.emit();
  }

}
