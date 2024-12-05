import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, skip, tap } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent {
  @ViewChild('myButton') myButton!: ElementRef;
  ngOnInit(){
  }

  ngAfterViewInit(){
    this.operatorSkip();
  }

  operatorSkip(){
    fromEvent(this.myButton.nativeElement, 'click')
    .pipe(
      skip(4),
      tap(() => console.log('Cliquei no botão!'))
    ).subscribe();

    const it$ = interval(1000);
    it$.pipe(
      skip(6),
      tap((value) => console.log(value + ' <-- Emitiu via interval -->'))
    ).subscribe();

  }
}
