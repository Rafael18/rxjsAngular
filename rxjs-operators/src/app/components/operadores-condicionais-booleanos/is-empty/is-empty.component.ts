import { Component } from '@angular/core';
import { EMPTY, isEmpty, Subject } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.scss']
})
export class IsEmptyComponent {

  ngOnInit(){
    this.operatorIsEmpty();
  }

  operatorIsEmpty(){
    const subject = new Subject<string>();

    const result = EMPTY.pipe(
      isEmpty()
    )

    subject.subscribe(console.log);
    result.subscribe(console.log);
    subject.next('Rafael');
  }
}
