import { Component } from '@angular/core';
import { combineLatest, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent {
  ngOnInit(){
    this.operadorCombineLatest();
  }

  operadorCombineLatest(){
    const ob1$ = interval(1000).pipe(take(4));
    const ob2$ = of(5,6,7,8);
    const ob3$ = interval(1000).pipe(take(4));

    const combine = combineLatest(ob1$, ob2$, ob3$);
    combine.subscribe(console.log);
  }
}
