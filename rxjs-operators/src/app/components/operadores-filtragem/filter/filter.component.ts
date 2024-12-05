import { Component } from '@angular/core';
import { filter, from, interval, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  ngOnInit(){
    this.operatorFilter();
  }

  operatorFilter(){
    const arr = from([
      {name: 'Rafael', age: 36},
      {name: 'Jocely', age: 38},
      {name: 'Vitor', age: 12}
    ]);

    const it$ = interval(1000);
    const sub = it$;

    const names = arr.pipe(
      filter(value => value.age > 12)
    );

    const numberGreaterThanFive = it$.pipe(
      filter(value => value >= 5 && value <= 10)
    );

    names.subscribe(console.log);
    // arr.pipe( toArray()).subscribe(console.log);

    numberGreaterThanFive.subscribe(console.log);
  }
}
