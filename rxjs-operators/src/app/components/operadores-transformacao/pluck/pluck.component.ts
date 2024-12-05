import { Component } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent {

  ngOnInit(){
    this.operatorPluck();
  }
  operatorPluck(){
    const arr = from([
      {name:'Rafael', age:36, job: {title:'Developer',language:'.NET'}},
      {name:'Vitor', age:12},
      {name:'Jocely', age:38}
    ]);

    // const names = arr.pipe(
    //   pluck('age')
    // );

    const names = arr.pipe(
      pluck('job','language')
    );

    names.subscribe(console.log);
  }
}
