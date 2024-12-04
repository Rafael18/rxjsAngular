import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent {
  ngOnInit(){
    this.operatorOf();
  }

  operatorOf(){
    const arr = of([1,2,3,4,5]);
    const string = of('abc');
    const multValue = of({name: 'Rafael B.'}, true, function showName(){return 'Rafael Func'});

    arr.subscribe(res => console.log(res));
    string.subscribe(res => console.log(res));
    multValue.subscribe(res => console.log(res));
  }
}
