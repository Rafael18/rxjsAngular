import { Component } from '@angular/core';
import { fromEvent, interval, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss']
})
export class MapToComponent {
  ngOnInit(){
    this.operadorMapTo();
  }

  operadorMapTo(){
    const click = fromEvent(document, 'click');

    const it$ = interval(1000);

    const mapTo$ = click.pipe(mapTo('Olá Rafael'));
    const mapToIt$ = it$.pipe(mapTo('Gerou um numero'));

    mapTo$.subscribe(console.log);
    mapToIt$.subscribe(console.log);
  }

}
