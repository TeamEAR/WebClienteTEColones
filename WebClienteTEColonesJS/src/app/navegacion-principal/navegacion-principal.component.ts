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
  DashboardSelected: boolean;
  AccionTecolonesSelected: boolean;
  MaterialSelected: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    private _mobileQueryListener: () => void;

  constructor(private breakpointObserver: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.DashboardSelected = true;
    this.AccionTecolonesSelected = false;
    this.MaterialSelected = false;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  selectDashboard() {
    this.DashboardSelected = true;
    this.AccionTecolonesSelected = false;
    this.MaterialSelected = false;
  }

  selecAccionTecolones() {
    this.DashboardSelected = false;
    this.AccionTecolonesSelected = true;
    this.MaterialSelected = false;
  }

  selectMaterial() {
    this.DashboardSelected = false;
    this.AccionTecolonesSelected = false;
    this.MaterialSelected = true;
  }
}
