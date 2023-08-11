import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'parameter', cols: 1, rows: 1 },
          { title: 'curve', cols: 1, rows: 1 },
          { title: 'nelson siegel', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'parameter', cols: 1, rows: 1 },
        { title: 'curve', cols: 1, rows: 1 },
        { title: 'nelson siegel', cols: 2, rows: 2 },
        { title: 'Card 4', cols: 0, rows: 0 }
      ]
    })
  );

solverValue: any;
missPricingValue:any;

  constructor(private breakpointObserver: BreakpointObserver,private dialog:MatDialog) {}
}
