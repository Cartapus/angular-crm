import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VersionService } from 'src/app/core/version.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public version$: Observable<number>

  constructor(private versionService: VersionService) {
    this.version$ = this.versionService.version$
    .pipe(filter(num => num % 2 === 0))
  }

  ngOnInit(): void {
  }

}
