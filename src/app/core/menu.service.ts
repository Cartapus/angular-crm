import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private openP$ = new BehaviorSubject(true)

  public open$ = this.openP$.asObservable()

  constructor() { }

  toggle(){
    const value = !this.openP$.value
    this.openP$.next(value)
  }
}
