import { Component } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {

  ngOnInit(){
    this.operatorTap();
  }

  operatorTap(){
    const arr = of(
      {id: 1, name: 'Rafael'},
      {id: 2, name: 'Vitor'}
    );

    const sub = arr.pipe(
      tap(val => console.log('Antes do filter',val)),
      map((value: any) => value.filter((val: any) => val.name === 'Rafael')),
      tap(val => console.log(val))
    );

    sub.subscribe();
  }
}
