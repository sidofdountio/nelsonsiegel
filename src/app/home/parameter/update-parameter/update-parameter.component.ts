import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Parameter } from 'src/app/appInterface/parameter';


@Component({
  selector: 'app-update-parameter',
  templateUrl: './update-parameter.component.html',
  styleUrls: ['./update-parameter.component.css']
})
export class UpdateParameterComponent implements OnInit{

  parameterForm!: FormGroup;
  
  id:number=1;
  beta0:number =0;
  beta1:number = 0;
  beta2:number=0;
  beta3:number=0;
  lambda:number=0;
  mu:number=0;


  
  constructor( private fb:FormBuilder,
    public dialogRef: MatDialogRef<UpdateParameterComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Parameter) {
      this.id = data.id;
      this.beta0 = data.beta0;
      this.beta1 = data.beta1;
      this.beta2 = data.beta2;
      this.beta3 = data.beta3;
      this.lambda=data.lambda;
      this.mu=data.mu;
  }


  ngOnInit(): void {
    this.parameterForm = this.fb.group({
      id:[this.id,[]],
      beta0: [this.beta0, Validators.required],
      beta1: [this.beta1, []],
      beta2: [this.beta2, []],
      beta3: [this.beta3, []],
      lambda: [this.lambda, []],
      mu: [this.mu, []]
  
  });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateParameter(){
    this.dialogRef.close(this.parameterForm.value);
  }
}
