import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.scss']
})
export class BandeauComponent implements OnInit {
  @Input() public headerTitle!: string;
  @Input() public headerSubTitle!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
