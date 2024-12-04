import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {
  ngOnInit(){
    this.operatorInterval();
  }

  operatorInterval(){
    const inter = interval(1000);

    const subscription = inter.subscribe((res) => console.log(res));

    setTimeout(
      () => console.log('Desinscrito', subscription.unsubscribe())
      ,5000);
  }
}
