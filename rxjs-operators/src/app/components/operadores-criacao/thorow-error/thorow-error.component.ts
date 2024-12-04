import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-thorow-error',
  templateUrl: './thorow-error.component.html',
  styleUrls: ['./thorow-error.component.scss']
})
export class ThorowErrorComponent {

  ngOnInit(){
    this.operatorThrowError();
  }

  operatorThrowError(){
    const err = throwError('Sou uma baita de um erro');

    err.subscribe((res) => {
      console.log(res)
    },
    (error) => {
      console.error('ERRO:', error)
    },
    () => console.log('Completou')
  );
  }
}
