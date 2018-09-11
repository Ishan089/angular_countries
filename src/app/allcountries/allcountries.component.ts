import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { RegionsService } from "../regions.service";
import { Location } from "@angular/common";

import { Subscription } from 'rxjs';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppInterface } from "../../app/application-interface";

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css'],
  providers: [Location]
})
export class AllcountriesComponent implements OnInit {

 public allCountries: AppInterface[];
  public returnParameters: Subscription;
  public currencyParameter: boolean = false;
  public languageParameter: boolean = false;
  public region: string;
  public regionSelected: string;
  

  constructor(public regionService: RegionsService,private _route: ActivatedRoute, private router: Router, private spinnerService: Ng4LoadingSpinnerService,public location: Location) { }

  ngOnInit() {
    this.spinnerService.show();
    this.returnParameters = this._route.queryParams.subscribe(
      params => {

        if (params["currency"]) {
          this.currencyParameter = true
          this.getCountryByCurrency(params["currency"])
          this.spinnerService.hide();

        } else if (params["language"]) {
          this.languageParameter = true
          this.getCountryByLanguage(params["language"])
          this.spinnerService.hide();

        }else {
            this.currencyParameter = false
            this.region = this._route.snapshot.paramMap.get("region")
            this.regionSelected = this.region
            

          this.regionService.getAllCountries(this.region).subscribe(
            data => {
              this.allCountries = data
              this.spinnerService.hide();
              
            }, error => {
              console.log(error.errorMessage)
            }
          )

        }
      }
    )
  }
  
  public goback() {
    this.location.back();
  }

  getCountryByCurrency(code) {
    this.regionService.getCountryByCurrency(code).subscribe(
      (data: any[]) => {
        this.allCountries = data
      }
    )
  }

  getCountryByLanguage(code) {
    this.regionService.getCountryByLanguage(code).subscribe(
      (data: any[]) => {
        this.allCountries = data
      }
    )
  }

  public regionSelect(event) {
    this.spinnerService.show();
    this.regionService.getAllCountries(event).subscribe(
      data => {

        this.allCountries = data
        setTimeout(() => {
          this.spinnerService.hide();
        }, 1000);
      }, error => {
        console.log(error.errorMessage);
      }
    )
  }
  }