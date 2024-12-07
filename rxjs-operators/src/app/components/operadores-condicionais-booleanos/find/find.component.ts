import { Component } from '@angular/core';
import { find, of, tap } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {

  ngOnInit(){
    this.operatorFind();
  }

  operatorFind(){
    const names = of('Rafael', 'Vitor','Jocely','Léo',);

    const findName = names.pipe(
      find(val => val === 'Jocely'),
    )

    findName.subscribe(console.log);
  }
}
