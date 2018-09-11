import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  private baseurl = "https://restcountries.eu/rest/v2/" 

  constructor(private http: HttpClient) { }

  //get all countries by region
  public getAllCountries(region): Observable<any> {

    return this.http.get(`${this.baseurl}region/${region}`)

  }

  //get single country data
  public getSingleCountryInfo(country): Observable<any> {

    return this.http.get(`${this.baseurl}name/${country}`)

  }

//get countries by language
  public getCountryByLanguage(code) {
    return this.http.get(`${this.baseurl}lang/${code}`)
  }

//get countries by currency
  public getCountryByCurrency(code): Observable<any> {
    return this.http.get(`${this.baseurl}currency/${code}`)

  }


//error handler
  public handleError(err: HttpErrorResponse) {
    console.log("Error Handler");
    console.log(err.message);
    return Observable.throw(err.message);
  }
}