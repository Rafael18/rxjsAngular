import { Component } from '@angular/core';
import { forkJoin, of, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent {

  constructor(private apiService: ApiService){}
  ngOnInit(){
    this.operatorForkJoin();
    this.getUsers();
  }

  operatorForkJoin(){
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    })

    const httpMult$ = forkJoin({
      first: of(1,2,3,10),
      // error: throwError('Ocorreu um erro!'),
      second: timer(5000)
    });

    http$.subscribe(resp => console.log(resp));

    httpMult$.subscribe(resp => console.log(resp));
  }

  getUsers() {
    this.apiService.getUsersForkJoin().subscribe(
      res => console.log(res)
    );
  }

}
