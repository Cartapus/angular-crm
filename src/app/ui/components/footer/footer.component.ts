import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/core/version.service';
import { filter } from 'rxjs/operators';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version!: number
  public dateOfToday = dayjs()

  constructor(private versionService: VersionService) {
    this.versionService.version$
    .pipe(filter(num => num % 4 === 0))
    .subscribe(
      (data) => {this.version = data}
    )
  }

  ngOnInit(): void {
  }

}
