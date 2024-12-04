import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  ngOnInit(){
    this.initObservable();
  }

  initObservable(){
    const observable = new Observable((subscriber) => {
      subscriber.next(10)
      subscriber.next('Rafael')
      subscriber.next(true)
      subscriber.next({name: 'Rafael Batista'})
      subscriber.complete();
    });

    const it = interval(1000);

    const observer = {
      next: (x: any) => console.log('Observer next value: ' + x),
      error: (err: any) => console.log('Observer error' + err),
      complete: () => console.log('Observer complete'),
    };

    const subscription = observable.subscribe(observer);
    const subscription2 = it.subscribe(console.log);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 3000);

    subscription.unsubscribe();
  }
}
