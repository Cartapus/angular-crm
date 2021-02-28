import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/menu.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  public open!: boolean;

  constructor(private menuService: MenuService) {
    this.menuService.open$.subscribe((data) => this.open = data)
  }

  ngOnInit(): void {}

  public toggle() {
    this.menuService.toggle();
  }
}
