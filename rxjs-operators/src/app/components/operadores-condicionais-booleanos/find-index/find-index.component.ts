import { Component } from '@angular/core';
import { findIndex, of } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.scss']
})
export class FindIndexComponent {
  ngOnInit(){
    this.operatorFindIndex();
  }

  operatorFindIndex(){
    const names = of('Rafael', 'Vitor','Jocely','Léo',);

    const findNameIdenx = names.pipe(
      findIndex(val => val === 'Jocely'),
    )

    findNameIdenx.subscribe(console.log);
  }
}
