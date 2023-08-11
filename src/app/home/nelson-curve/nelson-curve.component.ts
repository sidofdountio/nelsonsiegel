import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BehaviorSubject } from 'rxjs';
import { AppServiceService } from 'src/app/app-service.service';
import { NelsonSiegelSvenson } from 'src/app/appInterface/nelsonSvensson';

@Component({
  selector: 'app-nelson-curve',
  templateUrl: './nelson-curve.component.html',
  styleUrls: ['./nelson-curve.component.css']
})
export class NelsonCurveComponent implements OnInit{

  muturityPerMonth:any[]=[];
  yield:any[]=[];
  public curveData = new BehaviorSubject<NelsonSiegelSvenson[]>([]);

  constructor(private appService:AppServiceService){}

  ngOnInit(): void {
    this.onNelsonSiegelSvenssonCurve();
    // onNelsonSegelSvenssonCurve(this.muturity,this.month);
   
  }


  onNelsonSiegelSvenssonCurve(): void {
    this.appService.getNelsonSiegelSvenson()
      .subscribe(
        (response: NelsonSiegelSvenson[]) => {
          this.curveData.next(response);
          for (let index = 0; index < response.length; index++) {
            this.muturityPerMonth[index] = response[index].maturitiePerMonths;
            this.yield[index] = response[index].yield;
          }
          // this.onNelsonSegelSvenssonCurvesDraw(this.muturityPerMonth,this.yield);
          onNelsonSegelSvenssonCurve(this.muturityPerMonth,this.yield);
        },
        (error: HttpErrorResponse) => {
          alert("ERROR: "+error.message);
        }
      )
  }



  onNelsonSegelSvenssonCurvesDraw(muturityPerMotn:string[],_yield:number[]) {
    const yieldData: any = document.getElementById('myChart')
    const visitorsChart = new Chart(yieldData, {
      data: {
        labels: muturityPerMotn,
        datasets: [{
          type: 'line',
          data: _yield,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          pointBorderColor: '#007bff',
          pointBackgroundColor: '#007bff',
          fill: false,
          pointHoverBackgroundColor: '#007bff',
          pointHoverBorderColor    : '#007bff'
        },]
      }
    })
  }

}

  function onNelsonSegelSvenssonCurve(muturity:any[],_yield:any[]){
    const ctx:any = document.getElementById('myChart');
        // ctx.style.height = '200px';
        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels:muturity,
            datasets: [{
              label: '# MONITORING',
              data: _yield,
              
              backgroundColor: 'transparent',
              borderColor: '#007bff',
              pointBorderColor: '#007bff',
              pointBackgroundColor: '#007bff',
              fill: false,
              pointHoverBackgroundColor: '#007bff',
              pointHoverBorderColor    : '#007bff'
              }]
          },
          options: {
            scales: {
              x:{
              beginAtZero : true
            } 
             
            }
          }
      });
      return myChart;

  }
  
  

