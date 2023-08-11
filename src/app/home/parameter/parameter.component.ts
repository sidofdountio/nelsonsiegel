import { Component, OnInit } from '@angular/core';
import { Parameter } from 'src/app/appInterface/parameter';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { UpdateParameterComponent } from './update-parameter/update-parameter.component';
import { AppServiceService } from 'src/app/app-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})

export class ParameterComponent implements  OnInit{



  id :number=1;
  beta0:number=0;
  beta1:number=0;
  beta2:number=0;
  beta3:number=0;
  lambda:number=0;
  mu:number=0;

  element:number=0;

  public parameter: Parameter ={id:this.id,
    beta0:this.beta0,
    beta1:this.beta1,
    beta2:this.beta2,
    beta3:this.beta3,
    lambda:this.lambda,
    mu:this.mu};
  displayedColumns: string[] = ['beta0','beta1','beta2','beta3','lambda','mu'];
  dataSource :Parameter[]=[];
  
  constructor(private dialog: MatDialog,private appService:AppServiceService) { }


  ngOnInit(): void {
    this.onParameter();
    
  }


  onParameter():void{
    this.appService.getParameter()
    .subscribe(
      (response:Parameter[])=>{
        this.dataSource=response;
        for (let index = 0; index < response.length; index++) {
           this.id=response[index].beta0;
           this.parameter.beta0=response[index].id;
           this.parameter.beta0=response[index].beta0;
           this.parameter.beta1=response[index].beta1;
           this.parameter.beta2=response[index].beta2;
           this.parameter.beta3=response[index].beta3;
           this.parameter.lambda=response[index].lambda;
           this.parameter.mu=response[index].mu;
        }
      }
    )
  }

  openDialog():void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data=this.parameter;
    // dialogConfig.data={ 
    //   id: this.id,beta0:this.beta0,beta1:this.beta1,beta2:this.beta2,beta3:this.beta3,lambda:this.lambda,mu:this.mu
    // }
    // this.dialog.open(UpdateParameterComponent, dialogConfig);

    //GET DATA AFETR CLOSSING.
    const dialogRef = this.dialog.open(UpdateParameterComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(updateParameter => {
        this.onSaveParameter(updateParameter);
        this.onParameter();
    });
  }


  onSaveParameter(parameterToUpdate:Parameter):void{
    this.appService.updatePrameter(parameterToUpdate)
    .subscribe(
      (response:Parameter)=>{
      },
      (error:HttpErrorResponse)=>{
        alert("ERROR :"+ error.message);
      }
    )
  }
 

}

const ELEMENT_DATA: Parameter[] = [
  {id: 1, beta0: 0.0, beta1: 0, beta2:3, beta3: 0, lambda:0.02, mu: 0.2}
];
