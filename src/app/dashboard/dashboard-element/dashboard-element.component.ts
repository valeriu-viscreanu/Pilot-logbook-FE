import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard-element',
  templateUrl: './dashboard-element.component.html',
  styleUrls: ['./dashboard-element.component.css']
})
export class DashboardElementComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total hours', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Total hours', content: "108 hours", cols: 1, rows: 1 },
        { title: 'Last Flight', content: "12 January 2023 - DA 40 - N5FL", cols: 1, rows: 1 },
        { title: 'Statistics', content: "Last Month flown a total of 14 Hours - 12.1 Daytime - 21. Night - 1.3 IFR",cols: 2, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
