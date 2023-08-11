import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Parameter } from './appInterface/parameter';
import { NelsonSiegelSvenson } from './appInterface/nelsonSvensson';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private readonly api = environment.url;
  constructor(private http:HttpClient) { }

  public getParameter():Observable<Parameter[]>{
    return this.http.get<Parameter[]>(`${this.api}/parameter/parameters`)
    .pipe(
      tap(console.log)
    )
  }

  public updatePrameter(parameterToUpdate:Parameter):Observable<Parameter>{
    return this.http.put<Parameter>(`${this.api}/parameter/updateParameter`,parameterToUpdate)
    .pipe(
      tap(console.log)
    )
  }

  public getNelsonSiegelSvenson():Observable<NelsonSiegelSvenson[]>{
    return this.http.get<NelsonSiegelSvenson[]>(`${this.api}/curve/nelsonsiegels`)
    .pipe(
      tap(console.log)
    )
  }

  public addNelsonSiegelSvenson(nelsonsiegelToSave:NelsonSiegelSvenson):Observable<NelsonSiegelSvenson>{
    return this.http.post<NelsonSiegelSvenson>(`${this.api}/curve/addNelsonsiegel`,nelsonsiegelToSave)
    .pipe(
      tap(console.log)
    )
  }

  public calibrateNelsonSiegelSvensons(nelsonsiegelToCalibrate:NelsonSiegelSvenson[]):Observable<NelsonSiegelSvenson[]>{
    return this.http.put<NelsonSiegelSvenson[]>(`${this.api}/curve/updateNelsonsiegel`,nelsonsiegelToCalibrate)
    .pipe(
      tap(console.log)
    )
  }


  public getSolver():Observable<number>{
    return this.http.get<number>(`${this.api}/curve/solver`)
    .pipe(
      tap(console.log)
    )
  }

  public getMissPricing():Observable<number>{
    return this.http.get<number>(`${this.api}/curve/misspricing`)
    .pipe(
      tap(console.log)
    )
  }
}
