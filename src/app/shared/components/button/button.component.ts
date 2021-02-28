import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public buttonTitle!: string;
  @Output() public btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  clicked(){
    this.btnClick.emit()
    console.log('clicked')
  }

}
