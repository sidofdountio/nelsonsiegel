import { Component, Inject, OnInit, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NelsonSiegelSvenson } from 'src/app/appInterface/nelsonSvensson';
@Component({
  selector: 'app-add-nelson-siegel',
  templateUrl: './add-nelson-siegel.component.html',
  styleUrls: ['./add-nelson-siegel.component.css']
})
export class AddNelsonSiegelComponent implements OnInit {

  nelsonSiegelToSave!: FormGroup;
  id!: number;
  referenceDate: string;
  maturity: string;
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: NelsonSiegelSvenson, private formBuild: FormBuilder, public dialogRef: MatDialogRef<AddNelsonSiegelComponent>) {
    this.id = data.id;
    this.referenceDate = data.referenceDate;
    this.price = data.price;
    this.value = data.value;
    this.yield = data.yield;
    this.maturity = data.maturity;
    this.coupon = data.coupon;
    this.daycountConventions = data.daycountConventions;
    this.daycountConventionsFloat = data.daycountConventionsFloat;
    this.frequency = data.frequency;
    this.frequencyFloat = data.frequencyFloat;
    this.maturitiePerMonths = data.maturitiePerMonths;
    this.periodFixing = data.periodFixing;
    this.periodStart = data.periodStart;
    this.periodEnd = data.periodEnd;
    this.periodPayment = data.periodPayment;
  }

  ngOnInit(): void {
    this.nelsonSiegelToSave = this.formBuild.group({
      id: [this.id, []],
      referenceDate: [this.referenceDate, []],
      maturity: [this.maturity, Validators.required],
      yield: [this.yield, []],
      value: [this.value, []],
      price: [this.price, Validators.required],
      frequency: [this.frequency, []],
      coupon: [this.coupon, Validators.required],
      frequencyFloat: [this.frequencyFloat, []],
      daycountConventions: [this.daycountConventions, []],
      daycountConventionsFloat: [this.daycountConventionsFloat, []],
      maturitiePerMonths: [this.maturitiePerMonths, []],
      periodFixing: [this.periodFixing, []],
      periodStart: [this.periodStart, []],
      periodEnd: [this.periodEnd, []],
      periodPayment: [this.periodPayment, []]
    });

  }

  onClose() {
    this.dialogRef.close();
  }

  onSaveNelsonSiegel() {
    this.dialogRef.close(this.nelsonSiegelToSave.value)
  }
}
