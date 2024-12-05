import { Component } from '@angular/core';
import { from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {


  ngOnInit(){
    this.operatorTake();
  }

  operatorTake(){
    const arr = from([
      {name: 'Rafael', age: 36},
      {name: 'Jocely', age: 38},
      {name: 'Vitor', age: 12}
    ]);

    const it$ = interval(1000);

    const names = arr.pipe(
      map(data => data.name),
      take(2)
    )

    const firstFiveValue = it$.pipe(
      take(8)
    );

    names.subscribe(console.log)
    firstFiveValue.subscribe(console.log);
  }
}
