import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { ApiService } from '../serivce/api.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  freshnessList = ["Brand New", "second Hand", "Refurbished"] 
 productForm !: FormGroup;  
  constructor( private formBuilder: FormBuilder,
               private apiService : ApiService,
               private snackBar : MatSnackBar,
               private dialogRef: MatDialogRef<AddproductComponent>) { }



  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ["",Validators.required],
      category : ['',Validators.required],
      freshness : ['',Validators.required],
      price : ['',Validators.required],
      Comment : ['',Validators.required],
      date : ['',Validators.required],
    })
  }
  createProduct(){
    console.log(this.productForm.value);
     this.apiService.postProduct(this.productForm.value).subscribe( data =>{
      console.log("------->", data);
      this.snackBar.open("product added successfully")
      this.productForm.reset();
      this.dialogRef.close('save');
    },
         err => {
          this.snackBar.open("product not added");
        })
      }
    }
