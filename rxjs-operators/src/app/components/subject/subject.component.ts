import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {

  ngOnInit(){
    this.initSubject();
  }

  initSubject(){

    // SUBJECT -> TODA VEZ QUE O VALOR FOR ATUALIZADO ELE RETORNA TODOS OS DADOS/INSCRIÇÕES
    const subject = new Subject<number>();

    // SUBJECT -> TODA VEZ QUE O VALOR FOR ATUALIZADO ELE RETORNA SÓ A ULTIMA ATUALIZAÇÃO
    const behaver = new BehaviorSubject(0); //PRECISA SEMPRE ITER UM VALOR INICIAL

    subject.subscribe({
      next: (v) => console.log(v)
    });

    subject.subscribe({
      next: (v) => console.log(v)
    });

    behaver.subscribe({
      next: (v) => console.log( 'Behaver '+ v)
    });

    behaver.subscribe({
      next: (v) => console.log( 'Behaver '+ v)
    });
    subject.next(10);
    subject.next(77);

    subject.next(38);

    behaver.subscribe({
      next: (v) => console.log( 'Behaver '+ v)
    });

    subject.next(39);
  }
}
