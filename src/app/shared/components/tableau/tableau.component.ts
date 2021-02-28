import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  @Input() public headersTable!: string[]

  constructor() { }

  ngOnInit(): void {
  }

}