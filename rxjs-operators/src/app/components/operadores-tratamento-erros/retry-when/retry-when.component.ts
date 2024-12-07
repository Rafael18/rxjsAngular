import { Component } from '@angular/core';
import { delayWhen, interval, map, tap, timer } from 'rxjs';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent {

  ngOnInit(){
    this.operatorRetryWhen();
  }

  operatorRetryWhen(){
    const it = interval(1000);

    const subscription = it.pipe(
      map(val => {

        if(val > 5){
          throw val;
        }

        return val;
      })
    )

    subscription.subscribe(console.log);
  }
}
