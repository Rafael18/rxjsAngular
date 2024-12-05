import { Component } from '@angular/core';
import { from, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  constructor(private apiService: ApiService){}
  ngOnInit(){
    this.operadorMap();
  }

  operadorMap(){

    const arr$ = from([
      {
        id: 1,
        name: 'Rafael Batista',
        email: 'rafaeltec_@live.com'
      },
      {
        id: 2,
        name: 'Vitor Rafael',
        email: 'Vitor@teste.com'
      },
      {
        id: 3,
        name: 'Jocely Santos',
        email: 'Jocely@teste.com'
      }
    ]);

    const num$ = from([1,2,3,4]);

    const numMap$ = num$.pipe(
      map(val => val * 2)
    );

    const arrMap = arr$.pipe(
      map(({name}) => name)
    );

    arrMap.subscribe(console.log);
    numMap$.subscribe(console.log);

    this.apiService.getUserHttp().subscribe(console.log);
  }
}
