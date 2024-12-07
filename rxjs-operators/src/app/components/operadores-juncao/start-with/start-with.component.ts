import { Component } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent {
  ngOnInit(){
    this.operadorStartWith();
  }

  operadorStartWith(){
    const values = of(1,2,3);
    const message = of('Word', 'Goodbye');

    const number = values.pipe(
      startWith(0)
    )

    const messageAddText = message.pipe(
      startWith('Hello')
    )

    number.subscribe(console.log)
    messageAddText.subscribe(console.log)
  }
}
