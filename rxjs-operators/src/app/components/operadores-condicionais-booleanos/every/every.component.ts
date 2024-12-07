import { Component } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss']
})
export class EveryComponent {

  ngOnInit(){
    this.operatorEvery();
  }

  operatorEvery(){
    const values = of(1,2,3,4,5,6,7);

    const equals = values.pipe(
      every(x => x < 8)
    )

    if(equals){
      console.log('Todos os numeros são menores que 8');
    }

    equals.subscribe(console.log);
  }
}
