import { filter, map } from 'rxjs';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent {

  constructor(private apiServive: ApiService){}

  ngOnInit(){
    this.operatorShareReplay();
  }

  operatorShareReplay(){
    const obsUser$ = this.apiServive.getUsersShareReplay();
    const nameSandra$ = obsUser$.pipe(
      map((data: any) => data.filter((value: any) => value.name === 'Sandra Gomes'))
    )

    const nameGleidson$ = obsUser$.pipe(
      map((data: any) => data.filter((value: any) => value.email === 'Gleidson@teste.com'))
    )

    obsUser$.subscribe(console.log)
    nameSandra$.subscribe(console.log)
    nameGleidson$.subscribe(console.log)
  }
}
