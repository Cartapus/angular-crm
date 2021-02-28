import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/menu.service';
import { VersionService } from 'src/app/core/version.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public open!: boolean;
  public user = {
    username: "toto",
    password: '123456#'
  }

  constructor(private versionService: VersionService, private menuService: MenuService) { }

  ngOnInit(): void {
  }

  public inc(){
    this.versionService.increment()
  }

  public dec(){
    this.versionService.decrement()
  }

  public toggle() {
    this.menuService.toggle();
  }

  public register(){
    console.log(this.user)
  }

}
