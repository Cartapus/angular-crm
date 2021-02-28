import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private versionP$ = new BehaviorSubject(11)

  //transformation du flux en lecture seule
  public version$ = this.versionP$.asObservable().pipe(
    map(x => x * 2)
  )

  constructor() {
  }

  increment(){
    // cache à l'instant t
    const value = this.versionP$.value + 1
    // alimenter le flux avec la nouvelle valeur
    this.versionP$.next(value)
    console.log(this.versionP$.value)
  }

  decrement(){
    const value = this.versionP$.value - 1
    this.versionP$.next(value)
    console.log(this.versionP$.value)
  }
}
