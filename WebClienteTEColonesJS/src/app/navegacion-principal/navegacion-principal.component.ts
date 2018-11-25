import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-navegacion-principal',
  templateUrl: './navegacion-principal.component.html',
  styleUrls: ['./navegacion-principal.component.scss'],
})
export class NavegacionPrincipalComponent {

  mobileQuery: MediaQueryList;
  isSelected: boolean;
  desplegado: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    private _mobileQueryListener: () => void;

  constructor(private breakpointObserver: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.isSelected = true;
    this.desplegado = false;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  funcion() {
    this.isSelected = !this.isSelected;
  }

  move() {
    if (this.desplegado === false) {
      document.getElementById('Contenedor').style.marginLeft = '210px';
      this.desplegado = !this.desplegado;
    } else {
      document.getElementById('Contenedor').style.marginLeft = '10px';
      this.desplegado = !this.desplegado;
    }
  }

}
