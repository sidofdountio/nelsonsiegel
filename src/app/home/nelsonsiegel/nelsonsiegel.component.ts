import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NelsonSiegelSvenson } from 'src/app/appInterface/nelsonSvensson';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddNelsonSiegelComponent } from './add-nelson-siegel/add-nelson-siegel.component';
import { BehaviorSubject } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nelsonsiegel',
  templateUrl: './nelsonsiegel.component.html',
  styleUrls: ['./nelsonsiegel.component.css']
})
export class NelsonsiegelComponent implements AfterViewInit, OnInit {

  // addNelsonSiegel!: NelsonSiegelSvenson ;
  id!: number;
  referenceDate!: string;
  maturity!: string;
  yield?: number;
  coupon!: number;
  price!: number;
  value?: number;
  frequency?: string;
  frequencyFloat?: string;
  daycountConventions?: string;
  daycountConventionsFloat?: string;
  maturitiePerMonths?: number;
  periodFixing?: string;
  periodStart?: string;
  periodEnd?: string;
  periodPayment?: string;



  public nelsonSiegelSvensson!: NelsonSiegelSvenson[];
  private nelsonSiegelSvenssonToCalibrate = new BehaviorSubject<NelsonSiegelSvenson[]>([]);
  private addNelsonSiegelSvensson = new BehaviorSubject<any>(null);

  @Output() public missPricing = new EventEmitter();
  @Output() public solvers = new EventEmitter();

  displayedColumns: string[] = ['maturity', 'yield', 'value', 'periodFixing', 'periodStart', 'periodEnd', 'periodPayment'];
  dataSource = new MatTableDataSource<NelsonSiegelSvenson>([]);
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  private isLoadingAdd = new BehaviorSubject<boolean>(false);
  isLoadingAdd$ = this.isLoadingAdd.asObservable();
  confirm!: boolean;

  constructor(private dialog: MatDialog, private appService: AppServiceService, private snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.onNelsonSiegelSvensson();
    this.onSolver();
    this.onMissPricing();
  }

  onNelsonSiegelSvensson(): void {
    this.appService.getNelsonSiegelSvenson()
      .subscribe(
        (response: NelsonSiegelSvenson[]) => {
          this.nelsonSiegelSvensson = response;
          this.dataSource.data = response;
          this.nelsonSiegelSvenssonToCalibrate.next(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
  }



  onCalibrateNelsonSvesson() {
    this.confirm = confirm("Do you really want to solver ?");
    if (this.confirm == true) {
      this.isLoading.next(true);
      this.appService.calibrateNelsonSiegelSvensons(this.nelsonSiegelSvenssonToCalibrate.value)
        .subscribe(
          (response: NelsonSiegelSvenson[]) => {
            this.isLoading.next(false);
            this.onSolver();
            this.onMissPricing();
            this.onNelsonSiegelSvensson();
            this.openSnackBar("Solver !", "ok");
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
            this.isLoading.next(false);
          }
        )
    } else {
      alert("Bye !")
    }

  }


  onSolver(): void {
    this.appService.getSolver()
      .subscribe(
        (respone: number) => {
          this.solvers.emit(respone)
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
  }

  onMissPricing(): void {
    this.appService.getMissPricing()
      .subscribe(
        (respone: number) => {
          this.missPricing.emit(respone)
        },
        (error: HttpErrorResponse) => {
          alert(error.message );
        }
      )
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  /**onOpenDialog to open dialog. */

  onOpenDialog(): void {
    const configDialog = new MatDialogConfig();
    configDialog.autoFocus = true;
    configDialog.disableClose = true;
    configDialog.data = {
      id: this.id,
      referenceDate: this.referenceDate,
      muturity: this.maturity,
      yield: this.yield,
      price: this.price,
      value: this.value,
      frequency: this.frequency,
      frequencyFloat: this.frequencyFloat,
      daycountConventions: this.daycountConventions,
      daycountConventionsFloat: this.daycountConventionsFloat,
      periodFixing: this.periodFixing,
      periodStart: this.periodStart,
      periodEnd: this.periodEnd,
      periodPayment: this.periodPayment
    };

    // Add 
    const dialogRef = this.dialog.open(AddNelsonSiegelComponent, configDialog);
    dialogRef.afterClosed()
      .subscribe(
        (nelsonSiegelToSave) => {
          this.onSaveNelson(nelsonSiegelToSave);
        })
  }

  onSaveNelson(add: NelsonSiegelSvenson): void {
    this.isLoadingAdd.next(true);
    this.appService.addNelsonSiegelSvenson(add)
      .subscribe(
        (respons) => {
          this.isLoadingAdd.next(false);
          this.openSnackBar("Added successfuly !", "ok");
          this.onNelsonSiegelSvensson();
        },
        (error: HttpErrorResponse) => {
          this.isLoadingAdd.next(false);
          this.openSnackBar("Error: " + error.message, "ok");
        }
      )
  }

  openSnackBar(message: string, action: string) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}

