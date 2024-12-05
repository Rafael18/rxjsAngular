import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectComponent } from './components/subject/subject.component';
import { FromComponent } from './components/operadores-criacao/from/from.component';
import { OfComponent } from './components/operadores-criacao/of/of.component';
import { FromEventComponent } from './components/operadores-criacao/from-event/from-event.component';
import { IntervalComponent } from './components/operadores-criacao/interval/interval.component';
import { TimerComponent } from './components/operadores-criacao/timer/timer.component';
import { ThorowErrorComponent } from './components/operadores-criacao/thorow-error/thorow-error.component';
import { AjaxComponent } from './components/operadores-criacao/ajax/ajax.component';
import { ForkjoinComponent } from './components/operadores-criacao-juncao/forkjoin/forkjoin.component';
import { ZipComponent } from './components/operadores-criacao-juncao/zip/zip.component';
import { MergeConcatComponent } from './components/operadores-criacao-juncao/merge-concat/merge-concat.component';
import { MapComponent } from './components/operadores-transformacao/map/map.component';
import { MapToComponent } from './components/operadores-transformacao/map-to/map-to.component';
import { SwitchMapComponent } from './components/operadores-transformacao/switch-map/switch-map.component';
import { PluckComponent } from './components/operadores-transformacao/pluck/pluck.component';
import { ToArrayComponent } from './components/operadores-transformacao/to-array/to-array.component';
import { FilterComponent } from './components/operadores-filtragem/filter/filter.component';
import { TakeComponent } from './components/operadores-filtragem/take/take.component';
import { TakeUntilComponent } from './components/operadores-filtragem/take-until/take-until.component';
import { TakeWhileComponent } from './components/operadores-filtragem/take-while/take-while.component';
import { SkipComponent } from './components/operadores-filtragem/skip/skip.component';
import { DebounceTimeComponent } from './components/operadores-filtragem/debounce-time/debounce-time.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    SubjectComponent,
    FromComponent,
    OfComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    ThorowErrorComponent,
    AjaxComponent,
    ForkjoinComponent,
    ZipComponent,
    MergeConcatComponent,
    MapComponent,
    MapToComponent,
    SwitchMapComponent,
    PluckComponent,
    ToArrayComponent,
    FilterComponent,
    TakeComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    SkipComponent,
    DebounceTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
